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

const options = {
  port: 27015,
  host: '10.7.2.146',
  reuseAddress: true,
};

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
    <SafeAreaView style={styles.container}>
      <StratagemListView
        stratagemsData={StratagemsInfo}
        onPress={onStratagemPress}
        onLongPress={onStratagemLongPress}
        isSelected={isStratagemSelected}/>

      <StatusBar style="auto" />
    </SafeAreaView>
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
