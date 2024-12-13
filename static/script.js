const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
const weatherInfo = document.getElementById("weather-info");
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value;
  if (city) {
    getWeatherData(city);
  } else {
    weatherInfo.innerHTML = `<p>Please enter a city name.</p>`;
  }
});

function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      displayWeatherData(data);
    })
    .catch(error => {
      weatherInfo.innerHTML = `<p>${error.message}</p>`;
    });
}

function displayWeatherData(data) {
  const { name } = data;
  const { temp, humidity } = data.main;
  const { description, icon } = data.weather[0];

  weatherInfo.innerHTML = `
    <p><strong>City:</strong> ${name}</p>
    <p><strong>Temperature:</strong> ${temp}°C</p>
    <p><strong>Weather:</strong> ${description}</p>
    <p><strong>Humidity:</strong> ${humidity}%</p>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">
  `;
}
