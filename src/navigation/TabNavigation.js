import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Settings} from '../screens/Settings/Settings';
import {StackNavigation} from './StackNavigation';
import {ThemeContext} from '../providers/ThemeProvider';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  const {colors} = useContext(ThemeContext);
  return (
    <Tab.Navigator
      initialRouteName="StackNavigation"
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {backgroundColor: colors.background},
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
        }}
      />
    </Tab.Navigator>
  );
};
