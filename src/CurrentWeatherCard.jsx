import React from "react";

const CurrentWeatherCard = ({ weather }) => {

  console.log(weather);
 


  return (
    <div>
      <h2>CurrentWeatherCard</h2>
      <h3>{weather.detailedForecast}</h3>
      {/* <h3>{currentWeather.temperature}°{currentWeather.temperatureUnit}</h3>
      <h3>{currentWeather.shortForecast}</h3>
      <h3>{currentWeather.windSpeed}</h3> */}
    </div>
  );
};

export default CurrentWeatherCard;
