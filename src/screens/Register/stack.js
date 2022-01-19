import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import Register from '.';

const Stack = createStackNavigator();
export default function RegisterStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Register Detail" component={Register}/>
        </Stack.Navigator>
    )
}