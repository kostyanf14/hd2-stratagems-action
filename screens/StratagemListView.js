import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';
import {  FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { MMKV } from 'react-native-mmkv'

import { ClientConnectionContext } from '../Contexts';
import StratagemsInfo from '../StratagemsInfo';
import StratagemListRow from './StratagemListRow';

import ProtocolInfo from '../ProtocolInfo_pb';

export default function StratagemListView({stratagemsData}) {
  const { client } = useContext(ClientConnectionContext);
  const storage = new MMKV()
  const [favoriteStratagemsId, setFavoriteStratagemsId] = useState(JSON.parse(storage.getString('favorite_stratagems_id')) || [])

  useEffect(() => {
    storage.set('favorite_stratagems_id', JSON.stringify(favoriteStratagemsId))
  }, [favoriteStratagemsId])

  const dirid = {
    'U': ProtocolInfo.DirectionId.DIR_UP,
    'D': ProtocolInfo.DirectionId.DIR_DOWN,
    'L': ProtocolInfo.DirectionId.DIR_LEFT,
    'R': ProtocolInfo.DirectionId.DIR_RIGHT,
  }

  const convertStratagemCommand = (command) => {
    return [...command].map((cmd) => dirid[cmd]);
  }

  const sendStratagem = (stratagem) => {
    console.log('Send stratagem', stratagem.name);

    const authObj = new ProtocolInfo.Hd2Request();
    authObj.setVersion(1);
    authObj.setType(ProtocolInfo.RequestType.RT_STRATAGEM);

    str = convertStratagemCommand(stratagem.command);
    console.log('stratagem.command', stratagem.command, 'str', str);

    authObj.setStratagemList(str);

    const serializedData = authObj.serializeBinary();
    console.log('serializedData', serializedData);
    client.write(serializedData);
  };

  const addRemoveFavoriteStratagem = (stratagemId) => {
    console.log('favoriteStratagems1', favoriteStratagemsId)
    console.log('stratagemId', stratagemId)

    if (favoriteStratagemsId.includes(stratagemId)) {
      setFavoriteStratagemsId(favoriteStratagemsId.filter((id) => id !== stratagemId))
    } else {
      setFavoriteStratagemsId([...favoriteStratagemsId, stratagemId])
    }

    console.log('favoriteStratagems2', favoriteStratagemsId)
  }


  return (
    <View style={styles.container}>
        <FlatList
                data={stratagemsData}
                renderItem={({ item }) => <StratagemListRow
                    title={item.name}
                    description={item.command}
                    ImageTag={item.image}
                    onPress={() => sendStratagem(item)}
                    onLongPress={() => addRemoveFavoriteStratagem(item.id)}
                    isFavorite={favoriteStratagemsId.includes(item.id)}
                />}
            />

    </View>
  );
}

const styles = StyleSheet.create({
  strBtn: {
    width: 100,
    height: 100,
  },
  strFavoriteBtn: {
    borderColor: 'black',
    borderWidth: 1,
  },
  arrowBtnImage: {
    width: 80,
    height: 80,
    marginTop: 10,
    marginLeft: 10,
  },
  arrowsContainer: {
    flexDirection: 'column',
  },
  arrowsRow: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    width: '100%',
  }
});
