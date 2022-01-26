import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export const Specifications = ({route}) => {
  const {item} = route.params;
  const {theme} = useSelector(state => state.ReducerTheme);
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Image style={styles.img} source={{uri: item.img}} />
      <Text style={[styles.text, {color: theme.colors.text}]}>
        {item.carBrand + ' ' + item.carModel}
      </Text>
      <Text style={[styles.descriptions, {color: theme.colors.text}]}>
        {item.descriptions}
      </Text>
    </View>
  );
};

Specifications.propTypes = {
  route: PropTypes.object,
};
