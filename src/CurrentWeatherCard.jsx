import React from "react";


const CurrentWeatherCard = ({ currentWeather }) => {

//  console.log(currentWeather.weather.detailedForecast)


  return (
    <div className="current-weather-card">
      <h2>CurrentWeatherCard</h2>
      <h3>{currentWeather.currentWeather.detailedForecast}</h3>
      <h3>{currentWeather.currentWeather.temperature}°{currentWeather.currentWeather.temperatureUnit}</h3>
      <h3>{currentWeather.currentWeather.shortForecast}</h3> 
      <h3>Windspeed {currentWeather.currentWeather.windSpeed}</h3> 
    </div>
  );
};

export default CurrentWeatherCard;
