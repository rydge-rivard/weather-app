async function getWeather() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=62db22a04a3148b1b9a104744231311&q=London&aqi=yes"
  );
  const weather = await response.json();
  console.log(weather);
}

getWeather();
