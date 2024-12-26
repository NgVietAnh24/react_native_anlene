import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { database } from './firebase/config';
import { ref, set, get, onValue, remove } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from './firebase/config';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/welcome';
import Check from './screens/check';
import UserInfo from './screens/user-info';
import { RootStackParamList } from './types/type';
import ProInfo from './screens/pro-info';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Check" component={Check} options={{ headerShown: false }} />
        <Stack.Screen name="UserInfo" component={UserInfo} options={{ headerShown: false }} />
        <Stack.Screen name="ProInfo" component={ProInfo} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;