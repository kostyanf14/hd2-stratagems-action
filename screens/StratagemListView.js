import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';

import StratagemListRow from './StratagemListRow';


export default function StratagemListView({ stratagemsData, onPress, onLongPress, isSelected }) {


  return (
    <View style={styles.container}>
      <FlatList
        data={stratagemsData}
        renderItem={({ item }) => <StratagemListRow
          title={item.name}
          description={item.command}
          ImageTag={item.image}
          onPress={() => onPress(item)}
          onLongPress={() => onLongPress(item)}
          isSelected={isSelected(item)}
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
