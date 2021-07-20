import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import MaleBMI from './Screens/MaleBMI';
import AboutScreen from './Screens/AboutScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'BMI') {
              iconName = focused ? 'ios-calculator' : 'ios-calculator';
            } else if (route.name === 'About') {
              iconName = focused ? 'ios-person' : 'ios-person';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="BMI" component={MaleBMI} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  },
});
