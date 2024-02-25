import React from "react";

const CurrentWeatherCard = ({ weather }) => {

  console.log(weather);
 


  return (
    <div>
      <h2>CurrentWeatherCard</h2>
      <h3>{weather.detailedForecast}</h3>
      <h3>{weather.temperature}°{weather.temperatureUnit}</h3>
      <h3>{weather.shortForecast}</h3>
      <h3>{weather.windSpeed}</h3>
    </div>
  );
};

export default CurrentWeatherCard;
