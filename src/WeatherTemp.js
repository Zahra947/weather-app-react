//this component rendres the temp in two units
import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showFaren(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function showCelsuis(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function farenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div>
        <div className="row degree">
          <a href="/" id="celsius-link" className="active">
            {Math.round(props.celsious)}
            °C
          </a>
        </div>
        <div className="row degree">
          <a href="/" id="fahrenheit-link" onChange={showFaren}>
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
            onChange={showCelsuis}
          >
            {Math.round(farenheit())}
            °C
          </a>
        </div>
        <div className="row degree">
          <a href="/" id="fahrenheit-link">
            °F
          </a>
        </div>
      </div>
    );
  }
}
