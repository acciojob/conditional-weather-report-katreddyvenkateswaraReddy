
import React from "react";
import './../styles/App.css';
import WeatherApp from "./WeatherApp";

const weatherData = [{
  temperature: 25,
  conditions: 'Sunny'
},
{
  temperature: 20,
  conditions: 'Sunny'
}]

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        {
                weatherData.map(item=>(
                    
                      <WeatherApp 
                      temperature = {item.temperature}
                      conditions = {item.conditions}
                      />
                ))
             }
    </div>
  )
}

export default App
