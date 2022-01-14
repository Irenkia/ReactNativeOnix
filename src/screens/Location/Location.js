import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import MapView, {Marker, PROVIDER_GOOGLE, Polygon} from 'react-native-maps';
import {CustomMarker} from './CustomMarker';
import {coordinates} from '../../constants/coordinates';

export const Location = () => {

  const myRegion = {
    latitude: 48.5132,
    longitude: 32.2597,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const myAdres = {
    latitude: 48.5080075,
    longitude: 32.2690776,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.MainContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        showsUserLocation={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={myRegion}>
        <Polygon
          coordinates={coordinates.points}
          strokeWidth={0.5}
          fillColor={'rgba(0, 128, 128, 0.3)'}
        />
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
