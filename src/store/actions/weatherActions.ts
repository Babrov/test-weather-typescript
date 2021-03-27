import { ThunkAction } from 'redux-thunk';
import {
  FETCH_WEATHER,
  LOADING,
  ERROR,
  WeatherAction,
  WeatherData,
  WeatherError,
} from '../types';
import { RootState } from '../store';

export const fetchWeather = (
  city: string,
  units: string
): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_KEY&units=${units}`
      );
      if (!res.ok) {
        const data: WeatherError = await res.json();
        throw new Error(data.message);
      }
      const data: WeatherData = await res.json();
      data.units = units;
      dispatch({
        type: FETCH_WEATHER,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.message,
      });
    }
  };
};

export const loading = (): WeatherAction => {
  return {
    type: LOADING,
  };
};

export const makeError = (): WeatherAction => {
  return {
    type: ERROR,
    payload: '',
  };
};
