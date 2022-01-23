import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const CustomMarker = () => {
  return (
    <View style={styles.marker}>
      <Text style={styles.text}>Cars</Text>
    </View>
  );
};
