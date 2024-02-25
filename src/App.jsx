import "./App.css";
import CurrentWeatherCard from "./CurrentWeatherCard";
import CurrentDateAndTimeCard from "./CurrentDateAndTimeCard";
import react, { useState, useEffect } from "react";
import CalendarSection from "./CalendarSection.jsx"
import WeatherSection from "./WeatherSection";

const API = "http://127.0.0.1:5555/forecast";
const peculiarWeatherAPI = "https://api.weather.gov/points/38.7192,-94.4586";
const weatherForecastAPI =
  " https://api.weather.gov/gridpoints/EAX/48,34/forecast";

function App() {
  const [weather, setWeather] = useState({});

  // useEffect(() => {
  //   const fetchWeather = () => fetch(weatherForecastAPI, {
  //     headers: {
  //       'User-Agent': 'desk-dash/1.0'
  //     }
  //   }).then(r => r.json())

  //   // startFetching should be called at regular intervals to update the dom.
  //   async function startFetching() {
  //     const weatherData = await fetchWeather()
  //     console.log(weatherData)
  //     setWeather(weatherData)
  //   }

  useEffect(() => {
    const fetchWeather = () => {
      fetch(weatherForecastAPI, {
        headers: {
          "User-Agent": "desk-dash/1.0",
        },
      })
        .then((response) => response.json())
        .then((weatherData) => setWeather(weatherData.properties.periods[0]))
        .catch((error) => console.error("Error fetching weather data:", error));
    };

    fetchWeather();
  }, []);

  return (
    <>
      <section className="app">
        <WeatherSection weather={weather}/>
        <CalendarSection />
      </section>
    </>
  );
}

export default App;
