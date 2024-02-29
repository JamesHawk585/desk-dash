import "./App.css";
import CurrentWeatherCard from "./CurrentWeatherCard";
import CurrentDateAndTimeCard from "./CurrentDateAndTimeCard";
import react, { useState, useEffect } from "react";
import CalendarSection from "./CalendarSection.jsx"
import WeatherSection from "./WeatherSection";
import ForecastCardList from "./ForecastCardList.jsx";

const API = "http://127.0.0.1:5555/forecast";
const peculiarWeatherAPI = "https://api.weather.gov/points/38.7192,-94.4586";
const weatherForecastAPI =
  " https://api.weather.gov/gridpoints/EAX/48,34/forecast";

// 1:33:00

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecastWeather, setForecastWeather] = useState([])


  useEffect(() => {
    const fetchForecastWeather = () => {
      fetch(weatherForecastAPI, {
        headers: {
          'User-Agent': 'desk-dash/1.0'
        }
      }).then((r) => r.json())
      .then((forecastData) => setForecastWeather(forecastData.properties.periods))
    };
      fetchForecastWeather();
  }, [])


  // const forecastArray = forecastWeather ? forecastWeather.properties.periods : null;
  


  useEffect(() => {
    const fetchCurrentWeather = () => {
      fetch(weatherForecastAPI, {
        headers: {
          "User-Agent": "desk-dash/1.0",
        },
      })
        .then((response) => response.json())
        .then((weatherData) => setCurrentWeather(weatherData.properties.periods[0]))
        .catch((error) => console.error("Error fetching weather data:", error));
    };

    fetchCurrentWeather();
  }, []);

  console.log(forecastWeather)


  // const forecastWeatherArray = Object.entries(forecastWeather)

  // console.log(forecastWeatherArray)
  // console.log(forecastWeatherArray)

  return (
    <>
      <section className="app">
        <WeatherSection currentWeather={currentWeather} forecastWeather={forecastWeather}/>
        <CalendarSection />
        <ForecastCardList forecastWeather={forecastWeather}/>
      </section>
    </>
  );
}

export default App;
