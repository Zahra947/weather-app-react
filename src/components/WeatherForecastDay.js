import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${" "}${temperature}°C`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="forecast">
      <div className="col-sm-12 days"> {day()}</div>
      <div className="col-sm-12 daysDeg">
        <span className="max">{maxTemp()} </span>
        <span className="max">/</span>
        <span className="min">{minTemp()} </span>
      </div>
      <span className="col-sm-12 canvas">
        <WeatherIcon code={props.data.weather[0].icon} size={45} />
      </span>
    </div>
  );
}
