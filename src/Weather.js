import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const apiKey = "9e426d3dc7d76c6df8a50964d68d9730";
  const apiUrl = `api.openweathermap.org/data/2.5/weather?q={city}&appid=${apiKey}&units=metric`;

  return (
    <div class="row main">
      <div class="col-6 col-left">
        <div class="rowleft-2">
          <div class="col">
            <form class="form" id="search-form">
              <input
                class="search width"
                type="search"
                placeholder="Enter name of the city"
                id="cityInput"
                autocomplete="off"
                autofocus="on"
              />
              <input class="search" type="submit" value="Search" />
              <button class="search" id="current-location">
                current
              </button>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="col-6 rowleft-2">
            <div class="row city">
              <h2 id="city">Tehran</h2>
            </div>
            <div class="row city">Last update:</div>
            <div class="row city" id="currentDay"></div>
            <div class="row citywhether" id="description"></div>
            <div class="row rowleft-2 citywhether">
              Wind: <span id="wind">4</span> Km/h
              <br />
              Humidity:<span id="humidity">5</span> %
            </div>
          </div>
          <div class="col-6 rowleft-3">
            <div class="row icon">
              <img src="" alt="" class="icon" id="icon" />
            </div>
            <div class="row degree" id="temperature"></div>
            <div class="row degree">
              <a href="/" id="celsius-link" class="active">
                °C
              </a>
            </div>
            <div class="row degree">
              <a href="/" id="fahrenheit-link">
                °F
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3 col-right">
        <div class="row" id="forecast">
          <div class="col-4 days"></div>
          <div class="col-4 daysDeg sat">
            <h1>°C</h1>
            <span class="max"></span>/<span class="min"></span>°C
          </div>
          <div class="col-4 sunny"></div>
        </div>
      </div>
      <div class="bottom-line">
        <a href="https://github.com/Zahra947/weather-app" target="-blank">
          Open-Source Code
        </a>
        by Zahra Rabiei
      </div>
      <script src="src/script.js"></script>
    </div>
  );
}
