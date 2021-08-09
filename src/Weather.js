import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import formattedDate from "./formattedDate";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      wind: response.data.main.wind.speed,
      humidity: response.data.main.humidity,
      decription: response.data.weather[0].description,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="row main">
        <div className="col-6 col-left">
          <div className="rowleft-2">
            <div className="col">
              <form className="form" id="search-form">
                <input
                  className="search width"
                  type="search"
                  placeholder="Enter name of the city"
                  id="cityInput"
                  autocomplete="off"
                  autofocus="on"
                />
                <input className="search" type="submit" value="Search" />
                <button className="search" id="current-location">
                  current
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-6 rowleft-2">
              <div className="row city">
                <h2 id="city">{weatherData.city}</h2>
              </div>
              <div className="row city">
                Last update:
                <formattedDate date={weatherData.date} />{" "}
              </div>
              <div className="row city" id="currentDay">
                {Math.round(weatherData.temp)}
              </div>
              <div className="row citywhether" id="description">
                {weatherData.decription}{" "}
              </div>
              <div className="row rowleft-2 citywhether">
                Wind: <span id="wind">{weatherData.wind}</span> Km/h
                <br />
                Humidity:<span id="humidity">{weatherData.humidity}</span> %
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
  } else {
    const apiKey = "9e426d3dc7d76c6df8a50964d68d9730";
    const apiUrl = `api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
