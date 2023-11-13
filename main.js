async function getWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=62db22a04a3148b1b9a104744231311&q=${location}&aqi=yes`
  );
  const weather = await response.json();
  console.log(weather);
  const today = createWeatherObj(
    weather.location.country,
    weather.location.region,
    weather.location.name,
    weather.current.wind_dir,
    weather.current.wind_kph,
    weather.current.uv,
    weather.current.temp_c,
    weather.current.feelslike_c,
    weather.current.condition.text,
    weather.current.condition.icon
  );
  console.log(today);
}

function createWeatherObj(
  country,
  region,
  name,
  wind_dir,
  wind_kph,
  uv,
  temp_c,
  feelslike_c,
  text,
  icon
) {
  return {
    country,
    region,
    name,
    wind_dir,
    wind_kph,
    uv,
    temp_c,
    feelslike_c,
    text,
    icon,
  };
}

getWeather("Simcoe");
