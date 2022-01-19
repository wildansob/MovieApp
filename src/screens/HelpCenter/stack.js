import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import HelpCenter from '.';

const Stack = createStackNavigator();
export default function HelpCenterStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HelpCenter" component={HelpCenter}/>
            <Stack.Screen name="HelpCenter Detail" component={HelpCenter}/>
        </Stack.Navigator>
    )
}