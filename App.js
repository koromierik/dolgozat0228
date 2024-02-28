import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [tomeg, setTomeg] = useState('');
  const [magassag, setMagassag] = useState('');
  const [testtomegindex, setTesttomegindex] = useState(null);

  const calculateBMI = () => {
    const bmi = parseFloat(tomeg) / (parseFloat(magassag) * parseFloat(magassag));
    setTesttomegindex(bmi);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Testtömegindex számítás</Text>
      <TextInput
        style={styles.input}
        placeholder="Súly (kg)"
        keyboardType="numeric"
        value={tomeg}
        onChangeText={setTomeg}
      />
      <TextInput
        style={styles.input}
        placeholder="Testmagasság (méterben)"
        keyboardType="numeric"
        value={magassag}
        onChangeText={setMagassag}
      />
      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>Számítás</Text>
      </TouchableOpacity>
      {testtomegindex !== null && (
        <Text style={styles.result}>A testtömegindexe: {testtomegindex.toFixed(2)}</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 400,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  input: {
    width: '60%',
    height: 50,
    backgroundColor: 'lightgrey',
    borderColor: '#ccc',
    borderWidth: 6,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'blue',
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 30,
    marginTop: 30,
    fontWeight: 'bold',
  },
});
