import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import Play from '.';

const Stack = createStackNavigator();
export default function PlayStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Play" component={Play}/>
            <Stack.Screen name="Play Detail" component={Play}/>
        </Stack.Navigator>
    )
}
