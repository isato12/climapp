//object1
const city = document.querySelector("#city");
const deg = document.querySelector("#deg");
const icon = document.querySelector("#icon");
const description = document.querySelector("#description");

const getCity = "Colombia";

const key = "fc542c16b4298cc10a5d09ac11fb5aeb";
const URI = `https://api.openweathermap.org/data/2.5/weather?q=${getCity}&units=metric&appid=${key}`;

const xhr = new XMLHttpRequest();
function onRequestHandler() {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);
    console.log(data);
    // description.textContent = data.weather.main;
    deg.textContent = `${Math.trunc(data.main.temp)}°C`;
  }
}
xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", URI, true);
xhr.send();
