export const FETCH_WEATHER = 'FETCH_WEATHER';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

export interface WeatherArray {
  icon: string;
  main: string;
}

export interface WeatherData {
  main: {
    temp: number;
  };
  weather: WeatherArray[];
  name: string;
  units: string;
}

export interface WeatherError {
  cod: string;
  message: string;
}

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string;
}

interface FetchWeatherAction {
  type: typeof FETCH_WEATHER;
  payload: WeatherData;
}

interface LoadingAction {
  type: typeof LOADING;
}

interface ErrorAction {
  type: typeof ERROR;
  payload: string;
}

export type WeatherAction = FetchWeatherAction | LoadingAction | ErrorAction;
