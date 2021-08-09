//this component rendres the temp in two units
import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showFaren(event) {
    event.preventDefault();
    setUnit();
  }

  function showCelsuis(event) {
    event.preventDefault();
    setUnit();
  }

  function fahrenheit() {
    return (fahrenheit = (props.celsious * 9) / 5 + 32);
  }
  if (unit === celsious) {
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
            {Math.round(fahrenheit())}
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
