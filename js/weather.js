//object1
const city = document.querySelector("#city");
const grad = document.querySelector("#grad");
const icon = document.querySelector("#icon");
const weather_text = document.querySelector("#weather_text");

const getCity = "Colombia";

const key = "fc542c16b4298cc10a5d09ac11fb5aeb";
const URI = `https://api.openweathermap.org/data/2.5/weather?q=${getCity}&units=metric&appid=${key}`;

const xhr = new XMLHttpRequest();
function onRequestHandler() {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);
    console.log(data);
    weather_text.textContent = data.weather.main;
    grad.textContent = `${Math.trunc(data.main.temp)}°C`;
  }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", URI, true);
xhr.send();
