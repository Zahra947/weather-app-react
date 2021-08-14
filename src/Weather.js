import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      decription: response.data.weather[0].description,
      city: response.data.name,
      coordinates: response.data.coord,
    });
  }
  function search() {
    //call api based on the input name of city
    const apiKey = "9e426d3dc7d76c6df8a50964d68d9730";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //search for a city after submition
    search();
    //no need to write city in () because it is in state
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    //update the data when we type in the form
  }

  if (weatherData.ready) {
    return (
      <div className="row main">
        <div className="col-6 col-left">
          <div className="rowleft-2">
            <div className="col">
              <form className="form" id="search-form" onSubmit={handleSubmit}>
                <input
                  className="search width"
                  type="search"
                  placeholder="Enter name of the city"
                  id="cityInput"
                  autoComplete="off"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
                <input className="search" type="submit" value="Search" />
              </form>
            </div>
          </div>
          <WeatherInfo data={weatherData} />
        </div>
        <div className="col-3 col-right">
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
