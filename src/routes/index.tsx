import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoanDetailScreen, LoanListScreen } from '../screens';
import { LOAN_NAVIGATORS } from '../constants';

const Stack = createNativeStackNavigator();

export const LoanStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <Stack.Screen name="LoanList" component={LoanListScreen} options={{title: LOAN_NAVIGATORS.screens.list.title}}/>
      <Stack.Screen name="LoanDetail" component={LoanDetailScreen} options={{title: LOAN_NAVIGATORS.screens.detail.title}} />
    </Stack.Navigator>
  )
}
