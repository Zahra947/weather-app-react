import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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
