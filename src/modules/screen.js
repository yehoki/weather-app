import GithubIcon from "../github-mark.svg";
import Weather from "./API";

export default class Screen {
  static makeWeatherDetails() {
    const searchValue = document.getElementById("search-city-name");
    const searchForm = document.getElementById("weather-search");
    let weatherInfo = "";
    searchForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const cityName = searchValue.value;
      const cityWeather = new Weather(cityName);
      await cityWeather.getForecast();
      const details = cityWeather.getWeatherData();
      this.makeWeatherDisplay(details);
    });
  }

  static makeWeatherDisplay(weatherDetails) {
    const weatherDetailsDiv = document.createElement("div");
    if (document.getElementById("weather-details") !== null) {
      document.querySelector("main").removeChild(
        document.getElementById("weather-details")
      );
    }
    const locationName = document.createElement("p");
    const localTime = document.createElement("p");
    const temperature = document.createElement("p");
    const condition = document.createElement("h4");

    locationName.textContent = `${weatherDetails.location.name}, ${weatherDetails.location.country}`;
    localTime.textContent = `Current time: ${weatherDetails.location.localtime}`;
    temperature.textContent = `Temperature: ${weatherDetails.current.temp_c}°C`;
    condition.textContent = `Condition: ${weatherDetails.current.condition.text}`;

    weatherDetailsDiv.className = "weather-details";
    weatherDetailsDiv.id = "weather-details";

    weatherDetailsDiv.appendChild(condition);
    weatherDetailsDiv.appendChild(locationName);
    weatherDetailsDiv.appendChild(localTime);
    weatherDetailsDiv.appendChild(temperature);

    document.querySelector("main").appendChild(weatherDetailsDiv);
  }

  static makeFooter() {
    const footer = document.createElement("footer");
    const footerText = document.createElement("h4");
    const githubLink = document.createElement("a");
    const githubImage = new Image();
    githubImage.src = GithubIcon;
    githubImage.alt = "Github logo";
    githubImage.classList.add("svg");
    githubLink.href = "https://github.com/yehoki/";
    footerText.innerHTML = "Copyright © 2023 yehoki";
    githubLink.appendChild(githubImage);
    footer.appendChild(footerText);
    footer.appendChild(githubLink);
    return footer;
  }
}
