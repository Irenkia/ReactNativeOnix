import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addCarsBasket} from '../../store/carsList/actions';
import {LIST_CARS} from '../../constants/constants';
import PropTypes from 'prop-types';
import {styles} from './styles';
import {changeTheme} from '../../store/theme/actions';
import {DARK_COLORS, LIGHT_COLORS} from '../../constants/colors';

export const Home = ({navigation}) => {
  const {theme} = useSelector(state => state.ReducerTheme);
  const [isTheme, setIsTheme] = useState(false);
  const dispatch = useDispatch();
  const handleChangeColorTheme = () => {
    setIsTheme(!isTheme);
    if (theme === DARK_COLORS) {
      dispatch(changeTheme(LIGHT_COLORS));
    } else {
      dispatch(changeTheme(DARK_COLORS));
    }
  };

  const addToBasket = car => {
    dispatch(addCarsBasket(car));
  };

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <View style={styles.toggleWrapper}>
        <Text style={[styles.text, {color: theme.colors.text}]}>
          {isTheme ? 'Dark' : 'Light'}
          Mode
        </Text>
        <Switch
          style={styles.switch}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={theme.colors.thumbColor}
          value={isTheme}
          onValueChange={handleChangeColorTheme}
        />
      </View>
      <View>
        <Text style={[styles.example, {color: theme.colors.text}]}>
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
                  <Text style={[styles.item, {color: theme.colors.text}]}>
                    {item.carBrand + ' ' + item.carModel}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  // disabled={item ? false : true}
                  onPress={() => addToBasket(item)}>
                  <Text style={[styles.basket, {color: theme.colors.text}]}>
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
