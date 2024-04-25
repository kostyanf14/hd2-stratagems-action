import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ClientConnectionContext } from './Contexts';

import Welcome from "./screens/Welcome";
import AllStratagemsScreen from "./screens/AllStratagem";
import FavoriteStratagemTableView from './screens/FavoriteStratagemTableView';
import MissionScreen from './screens/MissionScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [client, setClient] = useState(null)

  useEffect(() => {
    if (!client) return;

    client.on('data', function (data) {
      console.log('message was received', data);
    });

    client.on('error', function (error) {
      console.log(error);
    });

    client.on('close', function () {
      console.log('Connection closed!');
    });

    return () => client.destroy();
  }, [client])

  return (
    <ClientConnectionContext.Provider value={{ client, setClient }}>
      <NavigationContainer>
        {client !== null? (
          <Welcome/>
        ) : (
        <Tab.Navigator>
          <Tab.Screen name="AllStratagems" component={AllStratagemsScreen} />
          <Tab.Screen name="Mission" component={MissionScreen} />
          <Tab.Screen name="FavoriteStratagems" component={FavoriteStratagemTableView} />
        </Tab.Navigator>
        )}
      </NavigationContainer>
    </ClientConnectionContext.Provider>
  );
}
