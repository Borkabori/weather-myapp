import React from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Budapest",
    date: "Monday, 07:00",
    description: "snow and rain",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/48/snow_s_rain.png",
    temperature: 3,
    felttemp: -1,
    humidity: 87,
    wind: 5,
  };
  return (
    <div className="Weather">
      <form>
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
            <input type="submit" className="button" value="Submit" />
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
}
