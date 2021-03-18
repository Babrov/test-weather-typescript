import {
  WeatherState,
  FETCH_WEATHER,
  LOADING,
  WeatherAction,
  ERROR,
} from '../types';

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: '',
};

const weatherReducer = (
  state = initialState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        data: action.payload,
        loading: false,
        error: '',
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
