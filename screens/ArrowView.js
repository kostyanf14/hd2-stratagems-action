import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';

import { ClientConnectionContext } from '../Contexts';
import ProtocolActions from '../modules/ProtocolActions';

import ProtocolInfo from '../ProtocolInfo_pb';

export default function ArrowView() {
  const { client } = useContext(ClientConnectionContext);

  const onPressUp = () => {
    ProtocolActions.sendButton(client, ProtocolInfo.ButtonId.BTN_UP);
  };

  const onPressDown = () => {
    ProtocolActions.sendButton(client, ProtocolInfo.ButtonId.BTN_DOWN);
  };

  const onPressLeft = () => {
    ProtocolActions.sendButton(client, ProtocolInfo.ButtonId.BTN_LEFT);
  };

  const onPressRight = () => {
    ProtocolActions.sendButton(client, ProtocolInfo.ButtonId.BTN_RIGHT);
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
