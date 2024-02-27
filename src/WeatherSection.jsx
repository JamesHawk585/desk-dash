import React from "react";
import CurrentDateAndTimeCard from "./CurrentDateAndTimeCard";
import CurrentWeatherCard from "./CurrentWeatherCard";

const WeatherSection = (currentWeather) => {

  return (
    <>
    <section className="weather-section">
      <CurrentDateAndTimeCard />
      <CurrentWeatherCard currentWeather={currentWeather} />
      </section>
    </>
  );
};

export default WeatherSection;
