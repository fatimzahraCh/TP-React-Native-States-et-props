import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, Text, StyleSheet } from 'react-native';

export default function App() {
  const [names, setNames] = useState(['test1', 'test2', 'test3']);
  const [counter, setCounter] = useState(4);

  const addName = () => {
    setNames([...names, `test ${counter}`]);
    setCounter(counter + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des étudiants</Text>
      
      <FlatList
        data={names}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
      />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={addName}>
          <Text style={styles.addButtonText}>+ Ajouter un nom</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    marginTop: 20,
  },
  flatList: {
    flex: 1,
    width: '100%',
  },
  flatListContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    width: '100%',
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
  buttonContainer: {
    paddingVertical: 20,
    paddingBottom: 40,
    width: '100%',
  },
  addButton: {
    backgroundColor: '#8B6F47',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addButtonText: {
    color: '#FFF8E7',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
