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
