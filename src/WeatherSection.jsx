import React from "react";
import CurrentDateAndTimeCard from "./CurrentDateAndTimeCard";
import CurrentWeatherCard from "./CurrentWeatherCard";

const WeatherSection = (weather) => {
    console.log(weather)

    console.log(weather["detailedForecast"])
    console.log(weather.detailedForecast)
  return (
    <>
      <CurrentDateAndTimeCard />
      <CurrentWeatherCard weather={weather} />
    </>
  );
};

export default WeatherSection;
