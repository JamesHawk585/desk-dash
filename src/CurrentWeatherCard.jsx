import React from 'react'

const CurrentWeatherCard = ({ weather }) => {

    console.log(weather.properties.periods[0].detailedForecast)

  return (
    <div>
        <h2>CurrentWeatherCard</h2>
        <h3>{weather.properties.periods[0].detailedForecast}</h3>
        <h3>{weather.properties.periods[0].temperature}°{weather.properties.periods[0].temperatureUnit}</h3>
    </div>
  )
}

export default CurrentWeatherCard