import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeCarsBasket} from '../../store/carsList/actions';
import {styles} from './styles';
import EmptyComponent from '../../components/EmptyComponent/EmptyComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Basket = () => {
  const {theme} = useSelector(state => state.ReducerTheme);
  const {carsBasket} = useSelector(state => state.ReducerCars);
  const dispatch = useDispatch();
  const removeFromCarsBasket = car => dispatch(removeCarsBasket(car));

  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(i => i + counter);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[styles.viewTop, {backgroundColor: theme.colors.background}]}>
        <Text style={[styles.textTop, {color: theme.colors.text}]}>
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
                  <View style={styles.positionContent}>
                    <View style={styles.wrapper}>
                      <Image style={styles.img} source={{uri: item.img}} />
                      <View style={{flexDirection: 'column'}}>
                        <Text
                          style={[styles.nameCar, {color: theme.colors.text}]}>
                          {item.carBrand + ' ' + item.carModel}
                        </Text>
                        <View style={styles.counterCars}>
                          <TouchableOpacity onPress={decrement}>
                            <Ionicons
                              name={'md-remove-circle-outline'}
                              size={42}
                              color={'red'}
                            />
                          </TouchableOpacity>
                          <Text
                            style={[
                              styles.counterText,
                              {color: theme.colors.text},
                            ]}>
                            {counter}
                          </Text>
                          <TouchableOpacity onPress={increment}>
                            <Ionicons
                              name={'md-add-circle-outline'}
                              size={42}
                              color={'red'}
                            />
                          </TouchableOpacity>
                        </View>
                        <View>
                          <Text style={{color: theme.colors.text}}>
                            {'Price - $ ' + item.price}
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={styles.deleteCarStyle}
                          onPress={() => removeFromCarsBasket(item)}>
                          <Text
                            style={[
                              styles.textButton,
                              {color: theme.colors.text},
                            ]}>
                            Delete car
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
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
