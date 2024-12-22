import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { database } from './firebase/config';
import { ref, set, get, onValue, remove } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from './firebase/config';

const App: React.FC = () => {
  const userId: string = 'Nguyen Van A'; // Example user ID
  const [imageFile, setImageFile] = useState<File | null>(null); // State to hold the image file

  // Function to handle image selection (you can replace this with your image picker logic)
  const handleImageSelection = (file: File) => {
    setImageFile(file);
  };

  async function uploadImage() {
    if (!imageFile) {
      console.error('No image file selected');
      return;
    }

    const storageReference = storageRef(storage, `images_anlene/${imageFile.name}`); // Create a reference to the storage location

    try {
      // Upload the file
      const snapshot = await uploadBytes(storageReference, imageFile);
      console.log('Uploaded a blob or file!', snapshot);

      // Get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log('File available at', downloadURL);
      return downloadURL; // Return the download URL
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }

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
      <TextInput
        placeholder="Enter image file name"
        onChangeText={(text) => handleImageSelection(new File([], text))} // Replace with actual file selection logic
        style={styles.input}
      />
      <Button title="Upload Image" onPress={uploadImage} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
  },
});

export default App;