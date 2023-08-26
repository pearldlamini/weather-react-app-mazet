import React from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
    let weatherData = {
        city: "Durban",
        temperature: 19,
        date: "Tuesday 10:00",
        description: "Cloudy",
        imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        humidity: "80",
        wind: "20"
      };
    
      return (
        <div className="weather">
          <form className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <div className="overview">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>last updated: {weatherData.date}</li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div class="d-flex weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="d-flex"
                />
                <div className="d-flex">
                  <strong>{weatherData.temperature}</strong>
                  <span className="units">
                    <a href="/">°C</a> | <a href="/">°F</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity:{weatherData.humidity}%</li>
                <li>Wind:{weatherData.wind} km/h</li>
              </ul>
              <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="goldenrod"
              size={48}
              animate={true}
              />
              <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="goldenrod"
              size={48}
              animate={true}
              />
              <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="goldenrod"
              size={48}
              animate={true}
              />
              <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="goldenrod"
              size={48}
              animate={true}
              />
            </div>
          </div>
          <small>
                <a href="https://github.com/pearldlamini/weather-react-app-mazet" tagert="blank_">Open-source-code</a>by Pearl Dlamini
              </small>
        </div>
      );
}