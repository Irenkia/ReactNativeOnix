import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Basket} from '../screens/Basket/Basket';
import {Location} from '../screens/Location/Location';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TabNavigation} from './TabNavigation';
import {useSelector} from 'react-redux';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  const {theme} = useSelector(state => state.ReducerTheme);
  //theme={theme === LIGHT_COLORS ? LIGHT_COLORS : DARK_COLORS}
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              width: '60%',
              backgroundColor: theme.colors.background,
            },
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
            headerTintColor: theme.colors.text,
            drawerInactiveTintColor: theme.colors.text,
            drawerActiveTintColor: 'red',
            drawerType: 'slide',
          }}>
          <Drawer.Screen name="Home" component={TabNavigation} />
          <Drawer.Screen name="Location" component={Location} />
          <Drawer.Screen name="Basket" component={Basket} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
