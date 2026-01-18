const apiKey = "1ff4f5907045b1dca50072968c988554";

async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        const data = await response.json();

        if (data.cod !== 200) {
            alert("City not found");
            return;
        }

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText =
            `Temperature: ${data.main.temp} °C`;
        document.getElementById("humidity").innerText =
            `Humidity: ${data.main.humidity}%`;

        const icon = data.weather[0].icon;
        document.getElementById("weatherIcon").src =
            `https://openweathermap.org/img/wn/${icon}@2x.png`;

    } catch (error) {
        alert("Error fetching weather data");
    }
}



