import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoanDetail, LoanList } from '../screens';
import { LOAN_NAVIGATORS } from '../constants';

const Stack = createNativeStackNavigator();

export const LoanStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoanList" component={LoanList} options={{headerShown:true}}/>
      <Stack.Screen name="LoanDetail" component={LoanDetail} options={{title: 'Detalhe do empréstimo'}} />
    </Stack.Navigator>
  )
}
