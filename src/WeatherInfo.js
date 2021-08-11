import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

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
            <FormattedDate date={props.data.date} />{" "}
          </div>
          <div className="row city" id="currentDay">
            {Math.round(props.data.temp)}
          </div>
          <div className="row citywhether" id="description">
            {props.data.decription}{" "}
          </div>
          <div className="row rowleft-2 citywhether">
            Wind: <span id="wind">{Math.round(props.data.wind)}</span> Km/h
            <br />
            Humidity:<span id="humidity">{props.data.humidity}</span> %
          </div>
        </div>
        <div className="col-6 rowleft-3">
          <WeatherIcon code={props.data.icon} size={160} />
          <div className="row degree" id="temperature">
            <WeatherTemp celsius={props.data.temp} />
          </div>
        </div>
      </div>
      <div className="bottom-line">
        <a href="https://github.com/Zahra947/weather-app-react" target="-blank">
          Open-Source Code{" "}
        </a>
        by Zahra Rabiei
      </div>
      <script src="src/script.js"></script>
    </div>
  );
}
