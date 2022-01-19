import {ADD_TO_CARS_BASKET_LIST, REMOVE_FROM_CARS_BASKET_LIST} from './types';

export const addCarsBasket = car => dispatch => {
  dispatch({
    type: ADD_TO_CARS_BASKET_LIST,
    payload: car,
  });
};

export const removeCarsBasket = car => dispatch => {
  dispatch({
    type: REMOVE_FROM_CARS_BASKET_LIST,
    payload: car,
  });
};
