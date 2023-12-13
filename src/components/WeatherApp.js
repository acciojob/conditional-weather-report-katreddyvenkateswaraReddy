import React,{useState} from "react";

const WeatherApp = ({ temperature,conditions}) =>{
    const threshold = 20;
  const temperatureColor = temperature > threshold ? 'red' : 'blue';

  return (
    <div>
      <h1>Weather App</h1>
      <p>Temperature: <span style={{ color: temperatureColor }}>{temperature}°C</span></p>
      <p>Conditions: {conditions}</p>
    </div>
  );
}

export default WeatherApp;