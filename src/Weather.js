import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

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
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    const apiKey = "9e426d3dc7d76c6df8a50964d68d9730";
    const apiUrl = `api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
