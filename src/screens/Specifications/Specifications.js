import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import {ThemeContext} from '../../providers/ThemeProvider';
import {styles} from './styles';

export const Specifications = ({route}) => {
  const {item} = route.params;
  const {colors} = useContext(ThemeContext);
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Image style={styles.img} source={{uri: item.img}} />
      <Text style={[styles.text, {color: colors.text}]}>
        {item.carBrand + ' ' + item.carModel}
      </Text>
      <Text style={[styles.descriptions, {color: colors.text}]}>
        {item.descriptions}
      </Text>
    </View>
  );
};

Specifications.propTypes = {
  route: PropTypes.object,
};
