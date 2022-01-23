import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeContext} from '../providers/ThemeProvider';
import {Home} from '../screens/Home/Home';
import {Specifications} from '../screens/Specifications/Specifications';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  const {colors} = useContext(ThemeContext);

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
            backgroundColor: colors.background,
          },
          headerTintColor: colors.text,
        }}
      />
    </Stack.Navigator>
  );
};
