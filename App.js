import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackNavigation} from './src/navigation/StackNavigation';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import ThemeProvider from './src/providers/ThemeProvider';
const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <ThemeProvider>
          <StackNavigation />
        </ThemeProvider>
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
