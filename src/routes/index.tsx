import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screens } from '../screens';

const Stack = createNativeStackNavigator();

export const Route = () => (
  <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
    {
      screens.map(screen => (
        <Stack.Screen 
          name={screen.name}
          component={screen.component}
          options={{title: screen.title}}
        />
      ))
    }
  </Stack.Navigator>
)
