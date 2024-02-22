import './App.css';
import CurrentWeatherCard from './CurrentWeatherCard';
import CurrentDateAndTimeCard from './CurrentDateAndTimeCard';
import react, { useState, useEffect } from 'react'

const API = "http://127.0.0.1:5555/forecast"

function App() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = () => fetch(API).then(r => r.json())

    async function startFetching() {
      const weatherData = await fetchWeather()
      console.log(weatherData)
      setWeather(weatherData)
    }
    startFetching();
    
  }, [])

  return (
    <>
    <CurrentDateAndTimeCard/>
    <CurrentWeatherCard />
    </>
  );
}

export default App;
