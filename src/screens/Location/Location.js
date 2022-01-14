import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {ThemeContext} from '../../providers/ThemeProvider';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {CustomMarker} from './CustomMarker';

export const Location = () => {
  const {colors} = useContext(ThemeContext);

  const myRegion = {
    latitude: 48.5132,
    longitude: 32.2597,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const myAdres = {
    latitude: 48.507736,
    longitude: 32.268455,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    // <View style={[styles.container, {backgroundColor: colors.background}]}>
    //   <Text style={[{color: colors.text}]}>Location</Text>
    // </View>

    <View style={styles.MainContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        showsUserLocation={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={myRegion}>
        <Marker
          coordinate={myAdres}
          title={'Kropyvnytskyi car rental'}
          description={'Kropyvnytskyi car rental any brands'}>
          <CustomMarker />
        </Marker>
      </MapView>
    </View>
  );
};
