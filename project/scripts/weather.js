const urlOstrava = 'https://api.openweathermap.org/data/2.5/weather?lat=49.82&lon=18.26&units=metric&appid=6cd4fb7fe9d8a122be83222c78b39415';
const urlOpava = 'https://api.openweathermap.org/data/2.5/weather?lat=49.94&lon=17.90&units=metric&appid=6cd4fb7fe9d8a122be83222c78b39415';
const urlOstravice = 'https://api.openweathermap.org/data/2.5/weather?lat=49.54&lon=18.39&units=metric&appid=6cd4fb7fe9d8a122be83222c78b39415';

async function apiFetch() {
    try {
        const responseOstrava = await fetch(urlOstrava);
        if (responseOstrava.ok) {
            const data = await responseOstrava.json();
            displayWeather(data, "weather-ostrava");
        } else {
            throw Error(await responseOstrava.text());
        }
        const responseOpava = await fetch(urlOpava);
        if (responseOpava.ok) {
            const data = await responseOpava.json();
            displayWeather(data, "weather-opava");
        } else {
            throw Error(await responseOpava.text());
        }
        const responseOstravice = await fetch(urlOstravice);
        if (responseOstravice.ok) {
            const data = await responseOstravice.json();
            displayWeather(data, "weather-ostravice");
        } else {
            throw Error(await responseOstravice.text());
        }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

function displayWeather(data, place) {
    const currentWeather = document.createElement('section');
    currentWeather.innerHTML = `
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].description}"/>
        <div>
        <p><b>${data.main.temp}</b>&deg;C</p>
        <p>${data.weather[0].description}</p>
        </div>
    `;
    document.getElementById(place).appendChild(currentWeather);
}