import React from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Icon
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';

//screen
import HomeStack from '../screens/Home/stack';
import ProfileStack from '../screens/Profile/stack';
import ExploreStack from '../screens/Explore/stack';
import PlayStack from '../screens/Play/stack';
import {moderateScale} from 'react-native-size-matters';
import {COLOR} from '../config/color';
import MovieDetail from '../screens/Home/MovieDetail';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLOR.red,
    background: COLOR.black,
    card: COLOR.black,
    text: 'white',
    border: 'none',
  },
};

const BottomTab = createBottomTabNavigator();
export default function Router() {
  return <NavigationContainer theme={MyTheme}>
      <BottomTab.Navigator
        initialRouteName="HomeTab"
        screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        <BottomTab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Foundation name="home" color={color} size={moderateScale(16)} />
            ),
          }}
          name="HomeTab"
          component={HomeStack}
        />
        <BottomTab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons
                name="md-play-circle-outline"
                color={color}
                size={moderateScale(20)}
              />
            ),
          }}
          name="PlayTab"
          component={PlayStack}
        />
        <BottomTab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons
                name="md-search-outline"
                color={color}
                size={moderateScale(20)}
              />
            ),
          }}
          name="ExploreTab"
          component={ExploreStack}
        />
        <BottomTab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons
                name="md-person-outline"
                color={color}
                size={moderateScale(20)}
              />
            ),
          }}
          name="ProfileTab"
          component={ProfileStack}
        />
      </BottomTab.Navigator>
  </NavigationContainer>;
}
