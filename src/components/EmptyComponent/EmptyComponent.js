import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from '../../screens/Basket/styles';

const EmptyComponent = ({title}) => {
  const {theme} = useSelector(state => state.ReducerTheme);
  return (
    <View
      style={[
        styles.emptyContainer,
        {backgroundColor: theme.colors.background},
      ]}>
      <Text style={[styles.emptyText, {color: theme.colors.text}]}>
        {title}
      </Text>
    </View>
  );
};
export default EmptyComponent;
