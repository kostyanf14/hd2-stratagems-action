import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';

import { ClientConnectionContext } from '../Contexts';
import ProtocolActions from '../modules/ProtocolActions';

export default function ArrowView() {
  const { client } = useContext(ClientConnectionContext);

  const onPressUp = () => {
    ProtocolActions.sendButton(client, 'U');
  };

  const onPressDown = () => {
    ProtocolActions.sendButton(client, 'D');
  };

  const onPressLeft = () => {
    ProtocolActions.sendButton(client, 'L');
  };

  const onPressRight = () => {
    ProtocolActions.sendButton(client, 'R');
  };

  return (
    <View style={styles.arrowsContainer}>
      <View style={styles.arrowsRow}>
        <TouchableOpacity style={styles.arrowBtn} onPress={onPressUp} >
          <Image
            source={require('../assets/direction/up.png')}
            style={styles.arrowBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.arrowsRow}>
        <TouchableOpacity style={styles.arrowBtn} onPress={onPressLeft} >
          <Image
            source={require('../assets/direction/left.png')}
            style={styles.arrowBtnImage}
          />
        </TouchableOpacity>
        <View style={styles.arrowBtn} />
        <TouchableOpacity style={styles.arrowBtn} onPress={onPressRight} >
          <Image
            source={require('../assets/direction/right.png')}
            style={styles.arrowBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.arrowsRow}>
        <TouchableOpacity style={styles.arrowBtn} onPress={onPressDown} >
          <Image
            source={require('../assets/direction/down.png')}
            style={styles.arrowBtnImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  arrowBtn: {
    width: 75,
    height: 75,
  },
  arrowBtnImage: {
    width: 100,
    height: 100,
  },
  arrowsContainer: {
    marginLeft: -25,
    marginTop: -25,
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
