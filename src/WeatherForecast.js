import axios from "axios";
import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "9e426d3dc7d76c6df8a50964d68d9730";
  let longtitude = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${longtitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="row" id="forecast">
      <div className="col-4 days">sun</div>
      <div className="col-4 daysDeg sat">
        <h1>19 °C</h1>
        <span className="max">20</span>/<span className="min">18</span>°C
      </div>
      <div className="col-4 canvas">
        <WeatherIcon code="01d" size={70} />
      </div>
    </div>
  );
}
