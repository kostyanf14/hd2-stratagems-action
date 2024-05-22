import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { MMKV } from 'react-native-mmkv'

import { ClientConnectionContext } from '../Contexts';

import ProtocolInfo from '../ProtocolInfo_pb';


const StratagemTableItem = ({ title, description, ImageTag, onPress, onLongPress, isFavorite }) => (
  <TouchableOpacity
    style={[styles.tableItem, isFavorite ? styles.tableItemFavorite : null]}
    onPress={onPress}
    onLongPress={onLongPress}>
    <ImageTag style={styles.photo} />
  </TouchableOpacity>
);

export default function StratagemTableView({ rowItemCount, stratagemsData }) {
  const { client } = useContext(ClientConnectionContext);

  const stratagemsRow = [];
  for (let i = 0; i < stratagemsData.length; i += rowItemCount)
    stratagemsRow.push(stratagemsData.slice(i, i + rowItemCount));
  console.log(stratagemsRow);

  const sendStratagem = (stratagem) => {
    ProtocolActions.sendStratagem(client, stratagem.name, stratagem.command);
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
    <View style={styles.tableContainer}>
      {stratagemsRow.map((chunk, i) => (
        <View key={i} style={styles.tableRow}>
          {chunk.map((stratagem) => (
            <StratagemTableItem key={stratagem.id} ImageTag={stratagem.image}
              onPress={() => sendStratagem(stratagem)} />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tableContainer: {
    alignItems: 'center',
  },
  tableItem: {
    width: 100,
    height: 100,
  },
  tableItemFavorite: {

  },
  tableRow: {
    flexDirection: 'row',
    margin: 10,
  },
});
