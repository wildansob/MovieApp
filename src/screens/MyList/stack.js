import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import MyList from '.';


const Stack = createStackNavigator();
export default function MyListStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="MyListStack" component={MyList}/>
            <Stack.Screen name="MyListStack Detail" component={MyList}/>
        </Stack.Navigator>
    )
}