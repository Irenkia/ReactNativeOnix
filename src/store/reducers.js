import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import ReducerCars from './carsList/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['carsBasket'],
};

const rootReducer = combineReducers({
  ReducerCars: persistReducer(persistConfig, ReducerCars),
});

export default rootReducer;
