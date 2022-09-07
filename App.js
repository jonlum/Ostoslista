import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Text, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const add = () => {
    setData([...data, { key: text }]);
    setText('');

  };
  const clear = () => {
    setData([]);
    setText('');
  };

  return (
    <><View style={styles.container}>
      <View style={{ padding: 100, flex: 1 }} >
        <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
        <Text style={{ padding: 20, textAlignVertical: "center", textAlign: "center", color: "blue", fontWeight: "bold" }}>Shopping list</Text>
        <FlatList data={data}
          renderItem={({ item }) => <Text style={{ textAlignVertical: "center", textAlign: "center", }}>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
        <StatusBar style="auto" />
      </View>
      <View style={styles.container2}>
        <Button onPress={add} title="Add" />
        <Button onPress={clear} title="Clear" />
        <StatusBar style="auto" />
      </View>

    </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 250,
    height: 100
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});
