import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './components/RegisterScreen';
import HomeScreen from './components/Home';
import GameScreen from './components/GameScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ title: 'Welcome' }}
      />
      <Stack.Screen 
        name="RegisterScreen" 
        component={RegisterScreen}
        options={{ title: ''}}
      />
      <Stack.Screen 
        name="GameScreen" 
        component={GameScreen}
        options={{ title: ''}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}