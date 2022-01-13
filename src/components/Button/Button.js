import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const ButtonScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicon name={'arrow-back'} size={28} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
export default ButtonScreen;
