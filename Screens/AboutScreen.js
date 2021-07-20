import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ToastAndroid,
} from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/bmi.png')} />
      <Text style={styles.paragraph}>BMI Calculator</Text>
      <Text style={styles.desc}>
        Body mass index (BMI) is a measure of body fat based on height and
        weight that applies to adult men and women. View the BMI tables or use
        this app to know your BMI.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 10,
  },
  btn: {
    width: '400px',
    height: '400px',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
  },
  desc: {
    textAlign: 'center',
  }
});
