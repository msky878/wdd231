const currentWeatherCard = document.querySelector('#weather-current');
const weatherForecastCard = document.querySelector('#weather-forecast');

const urlCurrent = 'https://api.openweathermap.org/data/2.5/weather?lat=49.82&lon=18.25&units=metric&appid=6cd4fb7fe9d8a122be83222c78b39415';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=49.82&lon=18.25&units=metric&appid=6cd4fb7fe9d8a122be83222c78b39415';

async function apiFetch() {
    try {
        const responseCurrent = await fetch(urlCurrent);
        if (responseCurrent.ok) {
            const dataCurrent = await responseCurrent.json();
            //console.log(data);
            displayCurrentWeather(dataCurrent);
        } else {
            throw Error(await responseCurrent.text());
        }
        const responseForecast = await fetch(urlForecast);
        if (responseForecast.ok) {
            const dataForecast = await responseForecast.json();
            //console.log(data);
            displayWeatherForecast(dataForecast);
        } else {
            throw Error(await responseForecast.text());
        }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

function displayCurrentWeather(data) {
    const title = document.createElement('h4');
    title.textContent = 'Current Weather';
    currentWeatherCard.appendChild(title);
    const currentWeather = document.createElement('section');
    currentWeather.id = 'current-weather-section';
    currentWeather.innerHTML = `
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].description}"/>
        <div>
        <p><b>${data.main.temp}</b>&deg;C</p>
        <p>${data.weather[0].description}</p>
        <p>High: ${data.main.temp_max}&deg;</p>
        <p>Low: ${data.main.temp_min}&deg;</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
        <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
        </div>
    `;
    currentWeatherCard.appendChild(currentWeather);
}

function displayWeatherForecast(data) {
    const title = document.createElement('h4');
    title.textContent = 'Weather Forecast';
    weatherForecastCard.appendChild(title);

    const forecastSection = document.createElement('section');
    forecastSection.id = 'forecast-section';

    const date = new Date();
    for(var i = 0; i < 3; i++){
        date.setDate(date.getDate() + i);


        const forecast = document.createElement('div');
        forecast.classList.add('forecast');
        forecast.innerHTML = `
            <p>${date.toLocaleDateString('en-US', { weekday: 'long' })}: <b>${data.list[i].main.temp}</b>&deg;C</p>
        `;
        forecastSection.appendChild(forecast);
    }

    weatherForecastCard.appendChild(forecastSection);
}