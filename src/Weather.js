import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState(" ");


    function weatherData(response) = {
        setWeather({

        
    city: "Budapest",
    date: "Monday, 07:00",
    description: "snow and rain",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/48/snow_s_rain.png",
    temperature: 3,
    felttemp: -1,
    humidity: 87,
    wind: 5,});
  };
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
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              className="button"
              value="Submit"
              onSubmit={updateCity}
            />
          </div>
          <div className="col-2">
            <input type="button" id="here" className="button" value="Here" />
          </div>
        </div>
      </form>

      <h1 className="choosencity">{weatherData.city}</h1>
      <ul>
        <li>{weatherData.date}</li>
        <li className="timeandzone">
          GMT <span>+1</span>
        </li>
      </ul>
      <br />
      <div className="row">
        <div className="col-4 tempanddetails">
          <ul>
            <li>{weatherData.description}</li>
            <li>
              feels like: <span>{weatherData.felttemp}</span> °C
            </li>
            <li>
              humidity: <span>{weatherData.humidity}</span> %
            </li>
            <li>
              wind: <span>{weatherData.wind}</span> km/h
            </li>
          </ul>
        </div>
        <div className="col-4">
          <img src={weatherData.imgUrl} alt={weatherData.description} />
        </div>

        <div className="col-4 tempanddetails">
          <span>{weatherData.temperature}</span>
          <span className="unit">
            <a href="/">°C</a> | <a href="/">°F</a>
          </span>
        </div>
      </div>
    </div>
  );

  function displayWeather(response) {
    setWeather({
      temperature: response.Data.main.temp,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "4f230f436aaf7bc8331e67c3e0e44473";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/Data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(weatherData);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
}
