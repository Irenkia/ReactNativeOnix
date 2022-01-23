import React, {useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addCarsBasket} from '../../store/carsList/actions';
import {LIST_CARS} from '../../constants/constants';
import {ThemeContext} from '../../providers/ThemeProvider';
import PropTypes from 'prop-types';
import {styles} from './styles';

export const Home = ({navigation}) => {
  const {isDark, colors, setColorScheme} = useContext(ThemeContext);

  const handleChangeColorTheme = isTrue =>
    setColorScheme(isTrue ? 'dark' : 'light');

  const dispatch = useDispatch();

  const addToBasket = car => {
    dispatch(addCarsBasket(car));
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View isDark={isDark} style={styles.toggleWrapper}>
        <Text style={[styles.text, {color: colors.text}]}>
          {isDark ? 'Dark' : 'Light'}
          Mode
        </Text>
        <Switch
          style={styles.switch}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={colors.thumbColor}
          value={isDark}
          onValueChange={handleChangeColorTheme}
        />
      </View>
      <View>
        <Text
          isDark={isDark}
          style={[styles.example, {color: colors.text}, {}]}>
          See the SectionsList in the settings
        </Text>
      </View>
      <FlatList
        data={LIST_CARS}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <View style={styles.wrapper}>
              <Image style={styles.img} source={{uri: item.img}} />
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Specifications', {item})}>
                  <Text style={[styles.item, {color: colors.text}]}>
                    {item.carBrand + ' ' + item.carModel}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  // disabled={item ? false : true}
                  onPress={() => addToBasket(item)}>
                  <Text style={[styles.basket, {color: colors.text}]}>
                    Add to basket
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.object,
  navigate: PropTypes.func,
};
