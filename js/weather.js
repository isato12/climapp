//object1
const city = document.querySelector("#city");
const deg = document.querySelector("#deg");
const icon = document.querySelector("#icon");
const description = document.querySelector("#description");
const backImage = document.querySelector(".header_img");

document.addEventListener("DOMContentLoaded", function () {
  getWeather("Naucalpan");
  cards(20.9881, -77.4297);
  getWeather_dos("Paris");
  getWeather_tres("Mexico City");
});

const displayBackground = (obj) => {
  const time = obj.dt;
  const hour = new Date(time * 1000).getHours();

  const weather = obj.weather[0].main;

  if (hour > 6 && hour < 19 && weather.includes("Clouds")) {
    backImage.style.backgroundImage = 'url("img/background/clouds.jpg")';
  } else if (hour < 6 && hour > 19 && weather.includes("Clouds")) {
    backImage.style.backgroundImage = 'url("img/background/cloudsn.jpg")';
  } else if (hour > 6 && hour < 19 && weather.includes("Rain")) {
    backImage.style.backgroundImage = 'url("img/background/rain.jpg")';
  } else if (hour < 6 && hour > 19 && weather.includes("Rain")) {
    backImage.style.backgroundImage = 'url("img/background/rainn.jpg")';
  } else if (hour > 6 && hour < 19 && weather.includes("Snow")) {
    backImage.style.backgroundImage = 'url("img/background/snow.jpg")';
  } else if (hour < 6 && hour > 19 && weather.includes("Snow")) {
    backImage.style.backgroundImage = 'url("img/background/snowN.jpg")';
  } else if (hour > 6 && hour < 19 && weather.includes("Thunderstorm")) {
    backImage.style.backgroundImage = 'url("img/background/thunderd.jpg")';
  } else if (hour < 6 && hour > 19 && weather.includes("Thunderstorm")) {
    backImage.style.backgroundImage = 'url("img/background/thunderdn.jpg")';
  } else if (hour > 6 && hour < 19 && weather.includes("Clear")) {
    backImage.style.backgroundImage = 'url("img/background/sun.jpg")';
  } else {
    backImage.style.backgroundImage = 'url("img/background/moon.jpg")';
  }
};
const displaydata = (obj) => {
  city.textContent = obj.name; //para obtener nombre, no funciona por ahora
  const iconW = obj.weather[0].icon; //obtener icono
  const addIcon = document.createElement("IMG");
  addIcon.setAttribute("src", `img/icons/${iconW}.svg`);
  icon.insertBefore(addIcon, description);
  description.textContent = obj.weather[0].main;
  deg.textContent = `${Math.trunc(obj.main.temp)}°C`;
};

const getWeather = (city) => {
  const key = "fc542c16b4298cc10a5d09ac11fb5aeb";
  const URI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${key}`;

  const xhr = new XMLHttpRequest();
  function onRequestHandler() {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      displayBackground(data);
      displaydata(data);
    }
  }
  xhr.addEventListener("load", onRequestHandler);
  xhr.open("GET", URI, true);
  xhr.send();
};
