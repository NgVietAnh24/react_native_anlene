import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { database } from './firebase/config'; // Import database from config
import { ref, set, get, onValue, remove } from "firebase/database"; // Import Realtime Database functions

const App: React.FC = () => {
  const userId: string = '123'; // Example user ID

  // Function to write data to the database
  const writeUserData = () => {
    set(ref(database, 'users/' + userId), {
      username: 'John Doe',
      age: 30,
    }).then(() => {
      console.log('Data set successfully!');
    }).catch((error) => {
      console.error('Error setting data: ', error);
    });
  };

  // Function to read data from the database
  const readUserData = () => {
    const userRef = ref(database, 'users/' + userId);
    get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log('User  data: ', snapshot.val());
      } else {
        console.log('No data available');
      }
    }).catch((error) => {
      console.error('Error getting data: ', error);
    });
  };

  // Function to listen for changes in the database
  const listenForChanges = () => {
    const userRef = ref(database, 'users/' + userId);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      console.log('User  data changed: ', data);
    });
  };

  // Function to delete data from the database
  const deleteUserData = () => {
    remove(ref(database, 'users/' + userId)).then(() => {
      console.log('Data removed successfully!');
    }).catch((error) => {
      console.error('Error removing data: ', error);
    });
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="Write User Data" onPress={writeUserData} />
      <Button title="Read User Data" onPress={readUserData} />
      <Button title="Listen for Changes" onPress={listenForChanges} />
      <Button title="Delete User Data" onPress={deleteUserData} />
      <StatusBar style="auto" />
    </View>
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

export default App;