import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import Explore from '.';
import ExploreDetail from './ExploreDetail'

const Stack = createStackNavigator();
export default function ExploreStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Explore" component={Explore}/>
            <Stack.Screen name="Explore Detail" component={Explore}/>
        </Stack.Navigator>
    )
}
