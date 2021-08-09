import React from "react";
import formattedDate from "./formattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row">
        <div className="col-6 rowleft-2">
          <div className="row city">
            <h2 id="city">{props.data.city}</h2>
          </div>
          <div className="row city">
            Last update:
            <formattedDate date={props.data.date} />{" "}
          </div>
          <div className="row city" id="currentDay">
            {Math.round(props.data.temp)}
          </div>
          <div className="row citywhether" id="description">
            {props.data.decription}{" "}
          </div>
          <div className="row rowleft-2 citywhether">
            Wind: <span id="wind">{props.data.wind}</span> Km/h
            <br />
            Humidity:<span id="humidity">{props.data.humidity}</span> %
          </div>
        </div>
        <div className="col-6 rowleft-3">
          <div className="row icon">
            <img src="" alt="" className="icon" id="icon" />
          </div>
          <div className="row degree" id="temperature"></div>
          <div className="row degree">
            <a href="/" id="celsius-link" className="active">
              °C
            </a>
          </div>
          <div className="row degree">
            <a href="/" id="fahrenheit-link">
              °F
            </a>
          </div>
        </div>
      </div>
      <div className="col-3 col-right">
        <div className="row" id="forecast">
          <div className="col-4 days"></div>
          <div className="col-4 daysDeg sat">
            <h1>°C</h1>
            <span className="max"></span>/<span className="min"></span>°C
          </div>
          <div className="col-4 sunny"></div>
        </div>
      </div>
      <div className="bottom-line">
        <a href="https://github.com/Zahra947/weather-app" target="-blank">
          Open-Source Code
        </a>
        by Zahra Rabiei
      </div>
      <script src="src/script.js"></script>
    </div>
  );
}
