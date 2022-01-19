import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import Account from '.';

const Stack = createStackNavigator();
export default function AccountStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Account" component={Account}/>
            <Stack.Screen name="Account Detail" component={Account}/>
        </Stack.Navigator>
    )
}