import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home/Home';
import {Specifications} from '../screens/Specifications/Specifications';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  const {theme} = useSelector(state => state.ReducerTheme);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Specifications'}
        component={Specifications}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTintColor: theme.colors.text,
        }}
      />
    </Stack.Navigator>
  );
};
