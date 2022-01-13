import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Basket} from '../screens/Basket/Basket';
import {Location} from '../screens/Location/Location';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeContext} from '../providers/ThemeProvider';
import {TabNavigation} from './TabNavigation';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  const {colors} = useContext(ThemeContext);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              width: '60%',
              backgroundColor: colors.background,
            },
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.text,
            drawerInactiveTintColor: colors.text,
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
