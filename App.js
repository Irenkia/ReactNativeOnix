import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, LogBox} from 'react-native';
// LogBox.ignoreLogs(['Reanimated 2']);
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import ThemeProvider from './src/providers/ThemeProvider';
import {DrawerNavigation} from './src/navigation/DrawerNavigation';
const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <DrawerNavigation />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default App;
