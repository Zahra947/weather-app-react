//this component rendres the temp in two units
import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showFaren(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function Farenheit() {
    return Math.round(props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="row degree">
        <div>
          <span>{Math.round(props.celsius)}</span>
          <div>°C</div>
          <a href="/" className="active" onClick={showFaren}>
            <div>°F</div>
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row degree">
        <div>
          <a href="/" className="active" onClick={showCelsius}>
            <span>{Math.round(Farenheit())} </span>
            <div>°C</div>
          </a>
          <div>°F</div>
        </div>
      </div>
    );
  }
}
