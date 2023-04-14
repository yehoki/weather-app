/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Weather)
/* harmony export */ });
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

class Weather {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixRQUFRLG1CQUFtQixRQUFROztBQUVsRDtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxvQkFBb0Isb0NBQW9DLE1BQU0sY0FBYztBQUM1RTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9BUEkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyB3ZWF0aGVyIGNsYXNzIHRvIGhvbGQgdGhlIHdlYXRoZXIgZGF0YVxuLy8gY2xhc3MgQ3VycmVudFdlYXRoZXJPYmplY3Qge1xuLy8gICAgIGNvbnN0cnVjdG9yKFxuLy8gICAgICAgICBjaXR5TmFtZSxcbi8vICAgICAgICAgY291bnRyeU5hbWUsXG4vLyAgICAgICAgIGxvY2FsVGltZSxcbi8vICAgICAgICAgY2xvdWRzLFxuLy8gICAgICAgICBjb25kaXRpb24sXG4vLyAgICAgICAgIGxhc3RVcGRhdGVkXG4vLyAgICAgKVxuLy8gfVxuXG4vLyBjb25zdCBjaGVja1BhcmlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbi8vIGNoZWNrUGFyaXMudGV4dENvbnRlbnQgPSBcIkNoZWNrIFBhcmlzIGN1cnJlbnQgd2VhdGhlciBoZXJlIVwiO1xuLy8gY2hlY2tQYXJpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhmZXRjaChiYXNlVVJMICsgXCJjdXJyZW50Lmpzb24/XCIgKyBcImtleT1cIiArIEFQSV9LRVkgKyBcIiZxPVBhcmlzXCIpKTtcbi8vIH0pO1xuXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5hcHBlbmRDaGlsZChjaGVja1BhcmlzKTtcblxuLy8gY29uc3QgY2hlY2tEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbi8vIGNoZWNrRGVmYXVsdC50ZXh0Q29udGVudCA9IFwiQ2hlY2sgRGVmYXVsdCB3ZWF0aGVyXCI7XG4vLyBjaGVja0RlZmF1bHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFdlYXRoZXJEYXRhKTtcbi8vIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLmFwcGVuZENoaWxkKGNoZWNrRGVmYXVsdCk7XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKCkge1xuLy8gICB0cnkge1xuLy8gICAgIGNvbnN0IGZldGNoRGF0YSA9IGF3YWl0IGZldGNoKGN1cnJlbnRGb3JlY2FzdFVSTCk7XG4vLyAgICAgY29uc3Qgd2VhdGhlckRhdGEgID0gYXdhaXQgZmV0Y2hEYXRhLmpzb24oKTtcbi8vICAgICBpZiAoIXdlYXRoZXJEYXRhLmxvY2F0aW9uKSB7XG4vLyAgICAgICB0aHJvdyB3ZWF0aGVyRGF0YTtcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuLy8gICB9IGNhdGNoIChlcnIpIHtcbi8vICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBhd2FpdCBlcnI7XG4vLyAgICAgY29uc29sZS5sb2coJ3Rlc3RpbmcnKTtcbi8vICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuLy8gICB9XG4vLyB9XG5cbi8vIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItc2VhcmNoXCIpO1xuXG4vLyBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4vLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XG4vLyB9KVxuXG5jb25zdCBiYXNlVVJMID0gXCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9cIjtcbmNvbnN0IEFQSV9LRVkgPSBcIjYyZDNhYmFmNDMzYTQ5NWE4MDIyMzEzMTEyMzEzMDRcIjtcbmNvbnN0IGRlZmF1bHRDaXR5ID0gXCJCYXRoXCI7XG5jb25zdCBjdXJyZW50Rm9yZWNhc3RVUkwgPSBgJHtiYXNlVVJMfWN1cnJlbnQuanNvbj9rZXk9JHtBUElfS0VZfSZxPWA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXRoZXIge1xuICBjb25zdHJ1Y3RvcihjaXR5TmFtZSkge1xuICAgIHRoaXMuY2l0eU5hbWUgPSBjaXR5TmFtZTtcbiAgICB0aGlzLndlYXRoZXJEYXRhID0gXCJcIjtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2l0eU5hbWU7XG4gIH1cblxuICBnZXRXZWF0aGVyRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy53ZWF0aGVyRGF0YTtcbiAgfVxuXG4gIGFzeW5jIGdldEZvcmVjYXN0KCkge1xuICAgIGNvbnN0IGZvcmVjYXN0VVJMID0gY3VycmVudEZvcmVjYXN0VVJMICsgdGhpcy5jaXR5TmFtZTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZm9yZWNhc3REYXRhID0gYXdhaXQgZmV0Y2goZm9yZWNhc3RVUkwpO1xuICAgICAgY29uc3QgZm9yZWNhc3RKU09OID0gYXdhaXQgZm9yZWNhc3REYXRhLmpzb24oKTtcbiAgICAgIGlmICghZm9yZWNhc3RKU09OLmxvY2F0aW9uKSB7XG4gICAgICAgIHRocm93IGZvcmVjYXN0SlNPTjtcbiAgICAgIH1cbiAgICAgIHRoaXMud2VhdGhlckRhdGEgPSBmb3JlY2FzdEpTT047XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLndlYXRoZXJEYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KFxuICAgICAgICBgTWVzc2FnZTogJHtlcnIuZXJyb3IubWVzc2FnZS5yZXBsYWNlKFwiLlwiLCBcIlwiKX0gZm9yICR7dGhpcy5jaXR5TmFtZX1gXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9