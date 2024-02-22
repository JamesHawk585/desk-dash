import './App.css';
import CurrentWeatherCard from './CurrentWeatherCard';
import CurrentDateAndTimeCard from './CurrentDateAndTimeCard';
import react, { useState, useEffect } from 'react'

const API = "http://127.0.0.1:5555/forecast"
const weatherAPI = "https://api.weather.gov/points/38.7192,-94.4586"

function App() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = () => fetch(weatherAPI).then(r => r.json())

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
