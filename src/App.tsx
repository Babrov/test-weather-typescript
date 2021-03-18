import { FC } from 'react';
import { useSelector } from 'react-redux';
import Select from './components/Select';
import Weather from './components/Weather';
import { RootState } from './store/store';
import styles from './styles/App.module.scss';

const App: FC = () => {
  const weatherData = useSelector((state: RootState) => state.data);
  const loading = useSelector((state: RootState) => state.loading);
  const error = useSelector((state: RootState) => state.error);
  return (
    <div className={styles.app}>
      <Select />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        weatherData && <Weather data={weatherData} />
      )}
      {error ? <h5 style={{ color: 'red' }}>{error}</h5> : ''}
    </div>
  );
};

export default App;
