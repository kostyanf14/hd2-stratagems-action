import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { MMKV } from 'react-native-mmkv'

import { ClientConnectionContext } from '../Contexts';
import StratagemsInfo from '../StratagemsInfo';

import ProtocolInfo from '../ProtocolInfo_pb';
import EagleAirstrike from "../assets/stratagems/Hangar/Eagle Airstrike.svg";

export default function StratagemTableView() {
  const { client } = useContext(ClientConnectionContext);
  const storage = new MMKV()
  const [favoriteStratagemsId, setFavoriteStratagemsId] = useState(JSON.parse(storage.getString('favorite_stratagems_id')) || [])

  useEffect(() => {
    console.log('favoriteStratagems2', favoriteStratagemsId)
    storage.set('favorite_stratagems_id', JSON.stringify(favoriteStratagemsId))
    console.log('favoriteStratagems3', storage.getString('favorite_stratagems_id'))
  }, [favoriteStratagemsId])

  const chunkSize = 3;
  const stratagemsRow = [];
  for (let i = 0; i < StratagemsInfo.length; i += chunkSize)
    stratagemsRow.push(StratagemsInfo.slice(i, i + chunkSize));
  console.log(stratagemsRow);

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
    <View style={styles.arrowsContainer}>
      {stratagemsRow.map((chunk, i) => (
        <View key={i} style={styles.arrowsRow}>
          {chunk.map((stratagem) => (
            <TouchableOpacity key={stratagem.id}
              style={[styles.strBtn, favoriteStratagemsId.includes(stratagem.id) ? styles.strFavoriteBtn : null]}
              onPress={() => { sendStratagem(stratagem) }}
              onLongPress={() => { addRemoveFavoriteStratagem(stratagem.id) }} >
              <stratagem.image style={styles.arrowBtnImage}/>
            </TouchableOpacity>
          ))}
        </View>
      ))}
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
});
