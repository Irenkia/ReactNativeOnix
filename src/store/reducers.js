import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import ReducerCars from './carsList/reducers';
import ReducerTheme from './theme/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['carsBasket', 'theme'],
};

const rootReducer = combineReducers({
  ReducerCars: persistReducer(persistConfig, ReducerCars),
  ReducerTheme: persistReducer(persistConfig, ReducerTheme),
});

export default rootReducer;
