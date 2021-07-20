import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
} from 'react-native';
import Constants from 'expo-constants';

import FlatButton from '../components/Button';

export default function MaleBMI() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [output, setOutput] = useState();

  function calculateBmi() {
    let w = weight;
    let h = height;
    let result = (parseFloat(w) * 10000) / (parseFloat(h) * parseFloat(h));
    result = result.toFixed(2);
    if (result < 18.5) {
      setOutput('Under Weight');
    } else if (result >= 18.5 && result < 25) {
      setOutput('Normal Weight');
    } else if (result >= 25 && result < 30) {
      setOutput('Over Weight');
    } else if (result >= 30) {
      setOutput('Obesed');
    } else {
      alert('Please Enter Data');
    }

    console.log(result);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Weight(Kg)"
        onChangeText={(weight) => setWeight(weight)}
        defaultValue={weight}
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Height(Cm)"
        onChangeText={(height) => setHeight(height)}
        defaultValue={height}
        keyboardType="number-pad"
      />
      <FlatButton text="BMI Calculator" onPress={calculateBmi} bg="#FBC02D" />

      <Text style={styles.outPut}>{output}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#212121',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    width: '90%',
  },
  outPut: {
    color: '#212121',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    margin: 40,
  },
  header: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
