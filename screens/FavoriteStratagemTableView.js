import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { MMKV } from 'react-native-mmkv'
import ArrowView from './ArrowView';
import StratagemTableView from './StratagemTableView';

import { ClientConnectionContext } from '../Contexts';
import StratagemsInfo from '../StratagemsInfo';

import ProtocolInfo from '../ProtocolInfo_pb';

const storage = new MMKV()
const chunkSize = 4;

const loadFavoriteStratagemIDs = () => JSON.parse(storage.getString('favorite_stratagems_id'));


export default function FavoriteStratagemTableView() {
  const { client } = useContext(ClientConnectionContext);
  const [favoriteStratagemIDs, setFavoriteStratagemIDs] = useState(loadFavoriteStratagemIDs());

  useEffect(() => {
    const listener = storage.addOnValueChangedListener(changedKey => {
      if (changedKey === 'favorite_stratagems_id') {
        setFavoriteStratagemIDs(loadFavoriteStratagemIDs());
      }
    });

    return () => {
      listener.remove();
    };
  }, []);

  const onPressA3 = () => {
    console.log('SG_TEST_ABCLEFTD clicked');

    console.log('favoriteStratagems', storage.getString('favorite_stratagems_id'))
    console.log('favoriteStratagems', storage.getAllKeys())
  };

  const favoriteStratagems = StratagemsInfo.filter((stratagem) => favoriteStratagemIDs.includes(stratagem.id));

  return (
    <View style={styles.container}>
      <StratagemTableView rowItemCount={3} stratagemsData={favoriteStratagems}/>
      <ArrowView />

      <Button title="onPressA3" onPress={onPressA3}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9f9f9f',
    height: '100%',
  },
  arrowBtn: {
    width: 100,
    height: 100,
  },
  arrowBtnImage: {
    width: 75,
    height: 75,
  },
  arrowsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
