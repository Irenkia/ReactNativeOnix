import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
//import {ThemeContext} from '../../providers/ThemeProvider';
//import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const CustomMarker =() =>{
    return (
        <View style={styles.marker}>
          <Text style={styles.text}>Cars</Text>
        </View>
      );
}

export default CustomMarker;