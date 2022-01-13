import {
    ADD_TO_CARS_BASKET_LIST,
    REMOVE_FROM_CARS_BASKET_LIST
} from './actions';

const initialState = {
    carsBasket: []
};

function ReducerCars(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CARS_BASKET_LIST:
            return { ...state, carsBasket: [...state.carsBasket, action.payload] };
        case REMOVE_FROM_CARS_BASKET_LIST:
            return {
                ...state,
                carsBasket: state.carsBasket.filter(car => car.id !== action.payload.id)
            };
        default:
            return state;
    }
}

export default ReducerCars;