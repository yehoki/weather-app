// weather class to hold the weather data
// class CurrentWeatherObject {
//     constructor(
//         cityName,
//         countryName,
//         localTime,
//         clouds,
//         condition,
//         lastUpdated
//     )
// }

// const checkParis = document.createElement("button");
// checkParis.textContent = "Check Paris current weather here!";
// checkParis.addEventListener("click", () => {
//   console.log(fetch(baseURL + "current.json?" + "key=" + API_KEY + "&q=Paris"));
// });

// document.querySelector("main").appendChild(checkParis);

// const checkDefault = document.createElement("button");
// checkDefault.textContent = "Check Default weather";
// checkDefault.addEventListener("click", getWeatherData);
// // document.querySelector("main").appendChild(checkDefault);

// async function getWeatherData() {
//   try {
//     const fetchData = await fetch(currentForecastURL);
//     const weatherData  = await fetchData.json();
//     if (!weatherData.location) {
//       throw weatherData;
//     }
//     console.log(weatherData);
//   } catch (err) {
//     const errorMessage = await err;
//     console.log('testing');
//     console.log(errorMessage);
//   }
// }

// const searchForm = document.getElementById("weather-search");

// searchForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event.target);
// })

const baseURL = "https://api.weatherapi.com/v1/";
const API_KEY = "62d3abaf433a495a802231311231304";
const defaultCity = "Bath";
const currentForecastURL = `${baseURL}current.json?key=${API_KEY}&q=`;

export default class Weather {
  constructor(cityName) {
    this.cityName = cityName;
    this.weatherData = "";
  }

  getName() {
    return this.cityName;
  }

  getWeatherData() {
    return this.weatherData;
  }

  async getForecast() {
    const forecastURL = currentForecastURL + this.cityName;
    try {
      const forecastData = await fetch(forecastURL);
      const forecastJSON = await forecastData.json();
      if (!forecastJSON.location) {
        throw forecastJSON;
      }
      this.weatherData = forecastJSON;
      console.log(this.weatherData);
    } catch (err) {
      alert(
        `Message: ${err.error.message.replace(".", "")} for ${this.cityName}`
      );
    }
  }
}
