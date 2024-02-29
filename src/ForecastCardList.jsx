import React from "react";
import DailyForecastCard from "./DailyForecastCard.jsx";

const ForecastCardList = ({ forecastWeather }) => {
  console.log(forecastWeather);

  const forecastCards = forecastWeather.map((card, index) => (
    <DailyForecastCard
      key={index}
      name={card.name}
      startTime={card.startTime}
      endTime={card.endTime}
      isDayTime={card.isDayTime}
      shortForecast={card.shortForecast}
      temperature={card.temperature}
      temperatureUnit={card.temperatureUnit}
      windDirection={card.windDirection}
      windSpeed={card.windSpeed}
    />
  ));

  return (
    <>
      {forecastCards}
      <div>placeholder</div>
    </>
  );
};

export default ForecastCardList;
