import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Button, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import TcpSocket from 'react-native-tcp-socket';
import React, { useContext, useState, useEffect } from 'react';

import { ClientConnectionContext } from '../Contexts';

import ArrowView from './ArrowView';
import StratagemTableView from './StratagemTableView';
import StratagemListView from './StratagemListView';

import ProtocolInfo from '../ProtocolInfo_pb';
import StratagemsInfo from '../StratagemsInfo';

const options = {
  port: 27015,
  host: '10.7.2.146',
  reuseAddress: true,
};

export default function AllStratagemsScreen() {
  const { client } = useContext(ClientConnectionContext);
  const [textValue, setTextValue] = useState('Hello from HELLDIVERS 2')

  const sendStr = (stratagem) => {
    console.log('Send stratagem ' + stratagem);

    const authObj = new ProtocolInfo.Hd2Request();
    authObj.setVersion(1);
    authObj.setType(ProtocolInfo.RequestType.RT_STRATAGEM);
    authObj.setStratagem(stratagem);

    const serializedData = authObj.serializeBinary();
    console.log('serializedData', serializedData);
    client.write(serializedData);
  };



  return (
    <SafeAreaView style={styles.container}>
      <StratagemListView stratagemsData={StratagemsInfo}></StratagemListView>

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
