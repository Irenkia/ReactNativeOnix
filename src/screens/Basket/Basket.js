import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addCarsBasket, removeCarsBasket} from '../../redux/actions';
import {ThemeContext} from '../../providers/ThemeProvider';
import {styles} from './styles';
import EmptyComponent from '../../components/EmptyComponent/EmptyComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Basket = () => {
  const {colors} = useContext(ThemeContext);

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

  // const addToCarsBasket = car => dispatch(addCarsBasket(car));
  // const deleteFromCarsBasket = car => dispatch(removeCarsBasket(car));

  // const newCar =[];
  //   const updateCarsBasket = (carsBasket, newCar, index) => {
  //     if(newCar.===0)
  //   };

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
                  <View style={styles.positionContent}>
                    <View style={styles.wrapper}>
                      <Image style={styles.img} source={{uri: item.img}} />
                      <View style={{flexDirection: 'column'}}>
                        <Text style={[styles.nameCar, {color: colors.text}]}>
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
                            style={[styles.counterText, {color: colors.text}]}>
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
                          <Text style={{color: colors.text}}>
                            {'Price - $ ' + item.price}
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={styles.deleteCarStyle}
                          onPress={() => removeFromCarsBasket(item)}>
                          <Text
                            style={[styles.textButton, {color: colors.text}]}>
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
