import React from "react";

const WeatherSection = (weather) => {
  return (
    <>
      <CurrentDateAndTimeCard />
      <CurrentWeatherCard weather={weather} />
    </>
  );
};

export default WeatherSection;
