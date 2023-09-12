document.addEventListener('DOMContentLoaded', async () => {
    try {
      const apiKey = '7842f98b3a54d2136e7d704f0bb04637';
      const city = 'Mumbai'; 
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error('Weather data not available.');
      }
  
      const weatherData = await response.json();
  
      const weatherContainer = document.querySelector('.weather-data');
  
      weatherContainer.innerHTML = `
        <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Weather: ${weatherData.weather[0].description}</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
      `;
    } catch (error) {
      const weatherContainer = document.querySelector('.weather-data');
      weatherContainer.innerHTML = '<p>Failed to fetch weather data.</p>';
      console.error(error);
    }
  });
  