// weather class to hold the weather data
// class CurrentWeatherObject {
//     constructor(
//         cityName,
//         countryName,
//         localTime,
//         clouds,
//         condition,
//         lastUpdated,

//     ){

//     }
// }

// class ForecastWeatherObject {
//     constructor(
//         cityName,
//         countryName,
//         localTime,
//         clouds,
//         condition,
//         lastUpdated
//     )
// }

const baseURL = "https://api.weatherapi.com/v1/";
const API_KEY = "62d3abaf433a495a802231311231304";
const defaultCity = "Bath";
const currentForecastURL = `${baseURL}current.json?key=${API_KEY}&q=${defaultCity}`;
const checkParis = document.createElement("button");
checkParis.textContent = "Check Paris current weather here!";
checkParis.addEventListener("click", () => {
  console.log(fetch(baseURL + "current.json?" + "key=" + API_KEY + "&q=Paris"));
});

document.body.appendChild(checkParis);

const checkDefault = document.createElement("button");
checkDefault.textContent = "Check Default weather";
checkDefault.addEventListener("click", getWeatherData);
document.querySelector("main").appendChild(checkDefault);

async function getWeatherData() {
  try {
    const fetchData = await fetch(currentForecastURL);
    const weatherData  = await fetchData.json();
    if (!weatherData.location) {
      throw weatherData;
    }
    console.log(weatherData);
  } catch (err) {
    const errorMessage = await err;
    console.log('testing');
    console.log(errorMessage);
  }
}
