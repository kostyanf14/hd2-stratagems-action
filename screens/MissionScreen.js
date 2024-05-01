import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Button, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import TcpSocket from 'react-native-tcp-socket';
import React, { useContext, useState, useEffect } from 'react';

import { ClientConnectionContext } from '../Contexts';

import ArrowView from './ArrowView';
import StratagemTableView from './StratagemTableView';
import StratagemListView from './StratagemListView';

import StratagemsInfo from '../StratagemsInfo';

import ProtocolActions from '../modules/ProtocolActions';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const options = {
  port: 27015,
  host: '10.7.2.146',
  reuseAddress: true,
};


function SelectMissionStratagemsScreen( { navigation } ) {
  const [missionStratagemsId, setMissionStratagemsId] = useState([])

  const addRemoveMissionStratagem = (stratagemId) => {
    if (missionStratagemsId.includes(stratagemId)) {
      setMissionStratagemsId(missionStratagemsId.filter((id) => id !== stratagemId))
    } else {
      setMissionStratagemsId([...missionStratagemsId, stratagemId])
    }
  }

  const onStratagemPress = (stratagem) => {
    addRemoveMissionStratagem(stratagem.id)
  }
  const onStratagemLongPress = (stratagem) => {

  }
  const isStratagemSelected = (stratagem) => {
    return missionStratagemsId.includes(stratagem.id)
  }

  const startMission = () => {
    navigation.navigate('Perform mission', { missionStratagemsId: missionStratagemsId })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Start Mission" onPress={startMission}></Button>
      <StratagemListView
        stratagemsData={StratagemsInfo}
        onPress={onStratagemPress}
        onLongPress={onStratagemLongPress}
        isSelected={isStratagemSelected}/>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function PerformMissionScreen( { route, navigation } ) {
  const { client } = useContext(ClientConnectionContext);
  const { missionStratagemsId } = route.params;
  const missionStratagems = StratagemsInfo.filter((stratagem) => missionStratagemsId.includes(stratagem.id));

  const onStratagemPress = (stratagem) => {
    ProtocolActions.sendStratagem(client, stratagem.name, stratagem.command);
  }
  const onStratagemLongPress = (stratagem) => {

  }
  const isStratagemSelected = (stratagem) => {
    return false
  }


  return (
    <SafeAreaView style={styles.container}>
      <StratagemListView
        stratagemsData={missionStratagems}
        onPress={onStratagemPress}
        onLongPress={onStratagemLongPress}
        isSelected={isStratagemSelected}/>

        <ArrowView/> 

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default function MissionScreen() {
  const { client } = useContext(ClientConnectionContext);

  const onStratagemPress = (stratagem) => {

  }
  const onStratagemLongPress = (stratagem) => {

  }
  const isStratagemSelected = (stratagem) => {
    return false
  }


  return (
    <Stack.Navigator>
      <Stack.Screen name="Select mission stratagems" component={SelectMissionStratagemsScreen} />
      <Stack.Screen name="Perform mission" component={PerformMissionScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
