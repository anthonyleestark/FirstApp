import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from './app/screens/Signup';
import Login from './app/screens/Login';
import ActiveScreen from './app/screens/ActiveScreen';
import HomeScreen from './app/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="ActiveScreen"
          component={ActiveScreen}
          options={{title: "Welcome to The Stupid App"}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{title: "Create New Account"}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: "Login"}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 24,
  }
});
