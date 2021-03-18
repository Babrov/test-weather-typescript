import { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather, loading } from '../store/actions/weatherActions';
import styles from '../styles/Select.module.scss';

const Select: FC = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('London');
  const [units, setUnits] = useState('standard');

  const cityHandler = (event: FormEvent<HTMLSelectElement>) => {
    setCity(event.currentTarget.value);
  };
  
  const unitsHandler = (event: FormEvent<HTMLSelectElement>) => {
    setUnits(event.currentTarget.value);
  };
  
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTimeout(() => {
      dispatch(loading());
      dispatch(fetchWeather(city, units));
    }, 500);
  };

  return (
    <div className={styles.container}>
      <h3>Choose city</h3>
      <form className={styles.form} onSubmit={submitHandler}>
        <select name="city" onChange={cityHandler}>
          <option value="London">London</option>
          <option value="Kyiv">Kyiv</option>
          <option value="Stockholm">Stockholm</option>
        </select>
        <select name="unit" onChange={unitsHandler}>
          <option value="standard">Kelvin</option>
          <option value="metric">Celsius</option>
          <option value="imperial">Fahrenheit</option>
        </select>
        <button className={styles.submit}>Show weather</button>
      </form>
    </div>
  );
};

export default Select;
