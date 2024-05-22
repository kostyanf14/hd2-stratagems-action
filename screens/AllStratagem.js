import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Button, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import TcpSocket from 'react-native-tcp-socket';
import React, { useContext, useState, useEffect } from 'react';

import { ClientConnectionContext } from '../Contexts';

import StratagemListView from './StratagemListView';

import StratagemsInfo from '../StratagemsInfo';
import { MMKV } from 'react-native-mmkv'

import ProtocolActions from '../modules/ProtocolActions';

const options = {
  port: 27015,
  host: '10.7.2.146',
  reuseAddress: true,
};
const storage = new MMKV()


export default function AllStratagemsScreen() {
  const { client } = useContext(ClientConnectionContext);
  const [favoriteStratagemsId, setFavoriteStratagemsId] = useState(JSON.parse(storage.getString('favorite_stratagems_id') || '[]' ))

  const onStratagemPress = (stratagem) => {
    ProtocolActions.sendStratagem(client, stratagem.name, stratagem.command);
  }
  const onStratagemLongPress = (stratagem) => {
    addRemoveFavoriteStratagem(stratagem.id)
  }
  const isStratagemSelected = (stratagem) => {
    return favoriteStratagemsId.includes(stratagem.id)
  }

  useEffect(() => {
    storage.set('favorite_stratagems_id', JSON.stringify(favoriteStratagemsId))
  }, [favoriteStratagemsId])

  const addRemoveFavoriteStratagem = (stratagemId) => {
    if (favoriteStratagemsId.includes(stratagemId)) {
      setFavoriteStratagemsId(favoriteStratagemsId.filter((id) => id !== stratagemId))
    } else {
      setFavoriteStratagemsId([...favoriteStratagemsId, stratagemId])
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StratagemListView
        stratagemsData={StratagemsInfo}
        onPress={onStratagemPress}
        onLongPress={onStratagemLongPress}
        isSelected={isStratagemSelected} />

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
