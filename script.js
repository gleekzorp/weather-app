let city = document.getElementById('city');
const submit = document.getElementById('submit');
const temp = document.getElementById('temp');
const clouds = document.getElementById('clouds');
const apiKey = // Please supply your openweathermap api key

function getCity() {
  return city.value
}

function getWeather(city, apiKey) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    showClouds(data)
    showTemp(data)
  });
}

function showTemp(data) {
  let kelvinTemp = data.main.temp
  let fahrenheit = Math.floor((kelvinTemp - 273) * 1.8 + 32)
  temp.innerHTML = fahrenheit
}

function showClouds(data) {
  clouds.innerHTML = data.weather[0].main
}

submit.addEventListener('click', () => {
  getWeather(getCity(), apiKey)
})


// Kelvin Equation
// F = 1.8(K - 273) + 32