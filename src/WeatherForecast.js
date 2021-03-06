import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    //change the loaded to false
    setLoaded(false);
    //whenever the coordinates are changed
  }, [props.coordinates]);

  function handleResponse(response) {
    //console.log(response.data);
    // to stroe and get daily data from api:
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "9e426d3dc7d76c6df8a50964d68d9730";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="row">
        {forecast.map(function (dailyForecast, index) {
          if (index < 3) {
            return <WeatherForecastDay key={index} data={dailyForecast} />;
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    load();

    return null;
  }
}
