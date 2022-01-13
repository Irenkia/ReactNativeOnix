import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {ThemeContext} from '../../providers/ThemeProvider';
import {styles} from '../../screens/Basket/styles';

const EmptyComponent = ({title}) => {
  const {colors} = useContext(ThemeContext);
  return (
    <View style={[styles.emptyContainer, {backgroundColor: colors.background}]}>
      <Text style={[styles.emptyText, {color: colors.text}]}>{title}</Text>
    </View>
  );
};
export default EmptyComponent;
