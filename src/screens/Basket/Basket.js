import React, {useContext} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeCarsBasket} from '../../redux/actions';
import {ThemeContext} from '../../providers/ThemeProvider';
import {styles} from './styles';
import EmptyComponent from '../../components/EmptyComponent/EmptyComponent';

export const Basket = () => {
  const {colors} = useContext(ThemeContext);

  const {carsBasket} = useSelector(state => state.ReducerCars);
  const dispatch = useDispatch();
  const removeFromCarsBasket = car => dispatch(removeCarsBasket(car));

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.viewTop, {backgroundColor: colors.background}]}>
        <Text style={[styles.textTop, {color: colors.text}]}>
          Your order basket
        </Text>
        <View style={styles.viewBottom}>
          <FlatList
            data={carsBasket}
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent={<EmptyComponent title="Add a car to basket" />}
            renderItem={({item}) => {
              return (
                <View>
                  <Image style={styles.img} source={{uri: item.img}} />
                  <TouchableOpacity onPress={() => removeFromCarsBasket(item)}>
                    <Text style={[styles.textButton, {color: colors.text}]}>
                      Delete car
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
