import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import Profile from '.';

const Stack = createStackNavigator();
export default function ProfileStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Profile Detail" component={Profile}/>
        </Stack.Navigator>
    )
}
