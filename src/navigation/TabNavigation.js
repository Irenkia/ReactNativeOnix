import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Settings} from '../screens/Settings/Settings';
import {StackNavigation} from './StackNavigation';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  const {theme} = useSelector(state => state.ReducerTheme);
  return (
    <Tab.Navigator
      initialRouteName="StackNavigation"
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {backgroundColor: theme.colors.background},
      }}>
      <Tab.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({size, color}) => {
            return <Ionicons name={'home'} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({size, color}) => {
            return <Ionicons name={'settings'} size={size} color={color} />;
          },
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTintColor: theme.colors.text,
        }}
      />
    </Tab.Navigator>
  );
};
