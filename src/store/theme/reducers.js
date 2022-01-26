import {CHANGE_THEME} from './types';
import {LIGHT_COLORS} from '../../constants/colors';
const initialState = {
  // dark: false,
  theme: LIGHT_COLORS,
};
const ReducerTheme = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {...state, theme: action.payload};
    default:
      return state;
  }
};
export default ReducerTheme;
