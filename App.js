import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Puedes realizar acciones de búsqueda con la variable 'searchQuery'
    console.log(`Realizando búsqueda para: ${searchQuery}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome, {username || 'Guest'}</Text>

      <View style={styles.userForm}>
        <Text>Enter your username:</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>

      <Text style={styles.subheading}>Search:</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="bienvenido a nuestro servicio de pizza"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 24,
    marginBottom: 20,
  },
  subheading: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  userForm: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: 200,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    flex: 1,
  },
});
