import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';

import { ClientConnectionContext } from '../Contexts';

import ProtocolInfo from '../ProtocolInfo_pb';

export default function ArrowView() {
  const { client } = useContext(ClientConnectionContext);

  const sendBtn = (btn) => {
    console.log('Send button' + btn);

    const authObj = new ProtocolInfo.Hd2Request();
    authObj.setVersion(1);
    authObj.setType(ProtocolInfo.RequestType.RT_BUTTON);
    authObj.setButton(btn);

    const serializedData = authObj.serializeBinary();
    console.log('serializedData', serializedData);
    client.write(serializedData);
  };

  const onPressUp = () => {
    console.log('Button clicked');

    sendBtn(ProtocolInfo.ButtonId.BTN_UP);
  };

  const onPressDown = () => {
    console.log('Button clicked');

    sendBtn(ProtocolInfo.ButtonId.BTN_DOWN);
  };

  const onPressLeft = () => {
    console.log('Button clicked');

    sendBtn(ProtocolInfo.ButtonId.BTN_LEFT);
  };

  const onPressRight = () => {
    console.log('Button clicked');

    sendBtn(ProtocolInfo.ButtonId.BTN_RIGHT);
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
