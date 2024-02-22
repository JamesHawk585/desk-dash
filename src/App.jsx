import logo from './logo.svg';
import './App.css';
import CurrentWeatherCard from './CurrentWeatherCard';
import CurrentDateAndTimeCard from './CurrentDateAndTimeCard';

function App() {
  return (
    <>
    <CurrentDateAndTimeCard/>
    <CurrentWeatherCard />
    </>
  );
}

export default App;
