import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';
import TcpSocket from 'react-native-tcp-socket';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { ClientConnectionContext } from '../Contexts';

const options = {
  port: 27015,
  //host: '10.7.2.146',
  host: '10.7.2.134',
  reuseAddress: true,
};

export default function Welcome({ navigation }) {
  const [welcomeTextValue, setWelcomeTextValue] =
    useState('Welcome to HELLDIVERS 2')
  const [manualTextValue, setManualTextValue] =
    useState('Please scan QR code from PC application or select recent PCs from the list below')

  const { client, setClient } = useContext(ClientConnectionContext)

  const connectBtn = () => {
    console.log('Connect button clicked');

    setClient(TcpSocket.createConnection(options));

    navigation.navigate('AllStratagems');
  };

  const closeConnectionBtn = () => {
    console.log('Close button clicked');

    setClient(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>{welcomeTextValue}</Text>
      <Text>{manualTextValue}</Text>
      <Button title="Connect" onPress={connectBtn}></Button>
      <Button title="Close" onPress={closeConnectionBtn}></Button>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
