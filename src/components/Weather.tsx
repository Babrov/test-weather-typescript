import { FC } from 'react';
import { WeatherData } from '../store/types';
import styles from '../styles/Weather.module.scss';

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const { name, main, weather, units } = data;
  const info = weather[0].main;
  const icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  return (
    <div
      className={`${styles.container} ${
        info === 'Rain'
          ? styles.rain
          : info === 'Snow'
          ? styles.snow
          : styles.fog
      }`}
    >
      <article className={styles.weather}>
        <h1>{name}</h1>
        <h3>{Math.round(main.temp)} {units === 'standard' ? 'K' : units === 'metric' ? '°C' : '°F'}</h3>
        <h3>{info}</h3>
        <img src={icon} alt="icon" />
      </article>
    </div>
  );
};

export default Weather;
