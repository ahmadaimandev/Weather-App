const api_key = "8e0a12f2b0edbcf6e45bf0b8f58ccbb0";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=kuala lumpur";

async function checkWeather() {
    const response = await fetch(api_url + `&appid=${api_key}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidty").innerHTML = data.main.humidty + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

checkWeather()