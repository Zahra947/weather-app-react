import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="col-4 days">{day()} </div>
      <div className="col-4 daysDeg sat">
        <h1>19 °C</h1>
        <span className="max">{maxTemp()} </span>/
        <span className="min">{minTemp()} </span>
      </div>
      <div className="col-4 canvas">
        <WeatherIcon code={props.data.weather[0].icon} size={70} />
      </div>
    </div>
  );
}
