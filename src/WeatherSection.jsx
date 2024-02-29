import React from "react";
import CurrentDateAndTimeCard from "./CurrentDateAndTimeCard";
import CurrentWeatherCard from "./CurrentWeatherCard";

const WeatherSection = ({currentWeather, forecastWeather}) => {

  console.log(forecastWeather)

  return (
    <>
    <section className="weather-section">
      <CurrentDateAndTimeCard />
      <CurrentWeatherCard currentWeather={currentWeather} forecastWeather={forecastWeather}/>
      </section>
    </>
  );
};

export default WeatherSection; 
