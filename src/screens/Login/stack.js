import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import Login from '.';

const Stack = createStackNavigator();
export default function LoginStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Login Detail" component={Login}/>
        </Stack.Navigator>
    )
}