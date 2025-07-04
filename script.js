async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "api"; // 🔁 Replace with your real API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      const weatherHtml = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
      document.getElementById("weather").innerHTML = weatherHtml;
    } else {
      document.getElementById("weather").innerHTML = `<p>Error: ${data.message}</p>`;
    }
  } catch (error) {
    document.getElementById("weather").innerHTML = `<p>Failed to fetch data.</p>`;
    console.error("Error:", error);
  }
}
