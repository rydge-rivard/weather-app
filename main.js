async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=62db22a04a3148b1b9a104744231311&q=${location}&aqi=yes`
    );
    const weather = await response.json();
    const today = createWeatherObj(
      weather.location.country,
      weather.location.region,
      weather.location.name,
      weather.location.localtime,
      weather.current.wind_dir,
      weather.current.wind_kph,
      weather.current.temp_c,
      weather.current.condition.icon
    );
    console.log(today);
    return today;
  } catch (err) {
    console.log(err);
  }
}

function createWeatherObj(
  country,
  region,
  name,
  localtime,
  wind_dir,
  wind_kph,
  temp_c,
  icon
) {
  return {
    country,
    region,
    name,
    localtime,
    wind_dir,
    wind_kph,
    temp_c,
    icon,
  };
}

async function init() {
  try {
    const location = await getWeather("Simcoe");
    updateDOM(location);
  } catch (err) {
    console.log(err);
  }
}

init();

const content = document.querySelector(".grid");
const input = content.querySelector("input");
const btn = content.querySelector("button");
const country = content.querySelector(".country");
const city = content.querySelector(".city-region");
const temp = content.querySelector(".temp");
const descr = content.querySelector(".descr");
const img = content.querySelector(".card-wrapper img");
const form = content.querySelector("form");

btn.addEventListener("click", (event) => searchWeather(event, input.value));
form.addEventListener("submit", (event) => searchWeather(event, input.value));

async function searchWeather(event, location) {
  event.preventDefault();
  try {
    const weather = await getWeather(location);
    updateDOM(weather);
    input.value = "";
  } catch (err) {
    console.log(err);
  }
}

function updateDOM(weather) {
  country.textContent = weather.country;
  city.textContent = `${weather.name}, ${weather.region}`;
  temp.textContent = `${weather.temp_c}°`;
  img.src = weather.icon;
}
