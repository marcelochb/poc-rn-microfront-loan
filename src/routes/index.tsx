import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoanDetail, LoanList } from '../screens';

const Stack = createNativeStackNavigator();

export const LoanStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="LoanList" component={LoanList} />
      <Stack.Screen name="LoanDetail" component={LoanDetail} />
    </Stack.Navigator>
  )
}
