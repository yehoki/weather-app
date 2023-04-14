/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixRQUFRLG1CQUFtQixRQUFRLEtBQUssWUFBWTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9BUEkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gd2VhdGhlciBjbGFzcyB0byBob2xkIHRoZSB3ZWF0aGVyIGRhdGFcbi8vIGNsYXNzIEN1cnJlbnRXZWF0aGVyT2JqZWN0IHtcbi8vICAgICBjb25zdHJ1Y3Rvcihcbi8vICAgICAgICAgY2l0eU5hbWUsXG4vLyAgICAgICAgIGNvdW50cnlOYW1lLFxuLy8gICAgICAgICBsb2NhbFRpbWUsXG4vLyAgICAgICAgIGNsb3Vkcyxcbi8vICAgICAgICAgY29uZGl0aW9uLFxuLy8gICAgICAgICBsYXN0VXBkYXRlZCxcblxuLy8gICAgICl7XG5cbi8vICAgICB9XG4vLyB9XG5cbi8vIGNsYXNzIEZvcmVjYXN0V2VhdGhlck9iamVjdCB7XG4vLyAgICAgY29uc3RydWN0b3IoXG4vLyAgICAgICAgIGNpdHlOYW1lLFxuLy8gICAgICAgICBjb3VudHJ5TmFtZSxcbi8vICAgICAgICAgbG9jYWxUaW1lLFxuLy8gICAgICAgICBjbG91ZHMsXG4vLyAgICAgICAgIGNvbmRpdGlvbixcbi8vICAgICAgICAgbGFzdFVwZGF0ZWRcbi8vICAgICApXG4vLyB9XG5cbmNvbnN0IGJhc2VVUkwgPSBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL1wiO1xuY29uc3QgQVBJX0tFWSA9IFwiNjJkM2FiYWY0MzNhNDk1YTgwMjIzMTMxMTIzMTMwNFwiO1xuY29uc3QgZGVmYXVsdENpdHkgPSBcIkJhdGhcIjtcbmNvbnN0IGN1cnJlbnRGb3JlY2FzdFVSTCA9IGAke2Jhc2VVUkx9Y3VycmVudC5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtkZWZhdWx0Q2l0eX1gO1xuY29uc3QgY2hlY2tQYXJpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jaGVja1BhcmlzLnRleHRDb250ZW50ID0gXCJDaGVjayBQYXJpcyBjdXJyZW50IHdlYXRoZXIgaGVyZSFcIjtcbmNoZWNrUGFyaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc29sZS5sb2coZmV0Y2goYmFzZVVSTCArIFwiY3VycmVudC5qc29uP1wiICsgXCJrZXk9XCIgKyBBUElfS0VZICsgXCImcT1QYXJpc1wiKSk7XG59KTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjaGVja1BhcmlzKTtcblxuY29uc3QgY2hlY2tEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNoZWNrRGVmYXVsdC50ZXh0Q29udGVudCA9IFwiQ2hlY2sgRGVmYXVsdCB3ZWF0aGVyXCI7XG5jaGVja0RlZmF1bHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFdlYXRoZXJEYXRhKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLmFwcGVuZENoaWxkKGNoZWNrRGVmYXVsdCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGF3YWl0IGZldGNoKGN1cnJlbnRGb3JlY2FzdFVSTCk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgID0gYXdhaXQgZmV0Y2hEYXRhLmpzb24oKTtcbiAgICBpZiAoIXdlYXRoZXJEYXRhLmxvY2F0aW9uKSB7XG4gICAgICB0aHJvdyB3ZWF0aGVyRGF0YTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBhd2FpdCBlcnI7XG4gICAgY29uc29sZS5sb2coJ3Rlc3RpbmcnKTtcbiAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=