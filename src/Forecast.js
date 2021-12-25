import "./Weather.css";

export default function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}

function displayForecast(response) {
  console.log(response.data.daily);

  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;

  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
                <div class="col-2">
                  <div class="forecast-date">${formatDay(forecastDay.dt)}</div>
                  <img
                    src="http://openweathermap.org/img/wn/${
                      forecastDay.weather[0].icon
                    }@2x.png"
                    alt="few clouds"
                    width="50px"
                  />
                  <div class="forecasted-temperatures">
                    <span class="forecasted-temp-max">${Math.round(
                      forecastDay.temp.max
                    )}°</span>|
                    <span class="forecasted-temp-min">${Math.round(
                      forecastDay.temp.min
                    )}°</span>
                  </div>
              </div>`;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  console.log(forecastHTML);
}
