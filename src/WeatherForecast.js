import axios from "axios";
import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    //console.log(response.data);
    // to stroe and get daily data from api:
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="row" id="forecast">
        <WeatherForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    let apiKey = "9e426d3dc7d76c6df8a50964d68d9730";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
