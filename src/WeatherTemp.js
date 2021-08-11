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
      <div>
        <div className="row degree">
          <span>
            {Math.round(props.celsius)}
            <br />
            °C
          </span>
        </div>
        <div className="row degree">
          <a
            href="/"
            id="fahrenheit-link"
            className="active"
            onClick={showFaren}
          >
            °F
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="row degree">
          <a
            href="/"
            id="celsius-link"
            className="active"
            onClick={showCelsius}
          >
            {Math.round(Farenheit())}
            <br />
            °C
          </a>
        </div>
        <div className="row degree">
          <span>°F</span>
        </div>
      </div>
    );
  }
}
