import React from "react";


const CurrentWeatherCard = ({ weather }) => {

console.log(weather);
 console.log(weather.weather.detailedForecast)


  return (
    <div className="current-weather-card">
      <h2>CurrentWeatherCard</h2>
      <h3>{weather.weather.detailedForecast}</h3>
      <h3>{weather.weather.temperature}°{weather.temperatureUnit}</h3>
      <h3>{weather.weather.shortForecast}</h3>
      <h3>{weather.weather.windSpeed}</h3>
    </div>
  );
};

export default CurrentWeatherCard;
