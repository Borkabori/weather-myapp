import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState({});

  function displayWeatherData(response) {
    setWeather({
      date: response.data.dt,
      description: response.data.weather[0].description,
      imgUrl: `https://ssl.gstatic.com/onebox/weather/48/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      felttemp: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "4f230f436aaf7bc8331e67c3e0e44473";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/Data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayWeatherData);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="Search for a city ..."
              autoComplete="off"
              autofocus="on"
              onSubmit={updateCity}
            />
          </div>
          <div className="col-2">
            <input type="submit" className="button" value="Submit" />
          </div>
          <div className="col-2">
            <input type="button" className="button" value="Here" />
          </div>
        </div>
      </form>

      <h1 className="choosencity">{weather.city}</h1>
      <ul>
        <li>${city}</li>
        <li className="timeandzone">
          GMT <span>{weather.data.sys.type}</span>
        </li>
      </ul>
      <br />
      <div className="row">
        <div className="col-4 tempanddetails">
          <ul>
            <li>{weather.description}</li>
            <li>
              feels like: <span>{weather.felttemp}</span> °C
            </li>
            <li>
              humidity: <span>{weather.humidity}</span> %
            </li>
            <li>
              wind: <span>{weather.wind}</span> km/h
            </li>
          </ul>
        </div>
        <div className="col-4">
          <img src={weather.imgUrl} alt={weather.description} />
        </div>

        <div className="col-4 tempanddetails">
          <span>{weather.temperature}</span>
          <span className="unit">
            <a href="/">°C</a> | <a href="/">°F</a>
          </span>
        </div>
      </div>
    </div>
  );
}
