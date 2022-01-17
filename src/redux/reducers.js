import {ADD_TO_CARS_BASKET_LIST, REMOVE_FROM_CARS_BASKET_LIST} from './actions';

const initialState = {
  carsBasket: [],
};

function ReducerCars(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CARS_BASKET_LIST:
      return {...state, carsBasket: [...state.carsBasket, action.payload]};

    //   if (action.payload === -1) {
    //     return {...state, carsBasket: [...state.carsBasket, action.payload]};
    //   } else {
    //     return {
    //       ...state,
    //       carsBasket: carsBasket.find(car => car.id + 1),
    //     };
    //   }
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
