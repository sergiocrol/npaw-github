import { ThemeActionTypes } from './theme.types';

const INITIAL_STATE = {
  darkMode: false
}

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemeActionTypes.TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode
      }
    default:
      return state;
  }
}

export default themeReducer;