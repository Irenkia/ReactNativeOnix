import {ADD_TO_CARS_BASKET_LIST, REMOVE_FROM_CARS_BASKET_LIST} from './types';

const initialState = {
  carsBasket: [],
};

function ReducerCars(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CARS_BASKET_LIST:
      return {...state, carsBasket: [...state.carsBasket, action.payload]};
    case REMOVE_FROM_CARS_BASKET_LIST:
      return {
        ...state,
        carsBasket: state.carsBasket.filter(
          car => action.payload.id !== car.id,
        ),
      };
    default:
      return state;
  }
}

export default ReducerCars;
