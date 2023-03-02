import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoanDetailScreen, LoanListScreen } from '../screens';
import { NAVIGATOR_CONSTANTS } from '../constants';

const Stack = createNativeStackNavigator();

export const Route = () => (
  <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
    <Stack.Screen name={NAVIGATOR_CONSTANTS.LIST_SCREEN_NAME} component={LoanListScreen} options={{title: NAVIGATOR_CONSTANTS.LIST_SCREEN_TITLE}}/>
    <Stack.Screen name={NAVIGATOR_CONSTANTS.DETAIL_SCREEN_NAME} component={LoanDetailScreen} options={{title: NAVIGATOR_CONSTANTS.DETAIL_SCREEN_TITLE}} />
  </Stack.Navigator>
)
