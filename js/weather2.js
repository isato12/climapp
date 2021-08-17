//object1
const city_dos = document.querySelector("#city_dos");
const country = document.querySelector("#country");
const deg_cuatro = document.querySelector("#deg_cuatro");
const icon_cuatro = document.querySelector("#icon_cuatro");
const humidity = document.querySelector("#humidity");
const deg_wind = document.querySelector("#deg_wind");
const wind_speed = document.querySelector("#wind_speed");

const displaydata2 = (obj) => {
  city_dos.textContent = obj.name; //para obtener nombre, no funciona por ahora
  const iconW = obj.weather[0].icon; //obtener icono
  const addIcon = document.createElement("IMG");
  addIcon.setAttribute("src", `img/icons/${iconW}.svg`);
  icon_cuatro.appendChild(addIcon);
  humidity.textContent = obj.weather[0].main.humidity;
  deg_cuatro.textContent = `${Math.trunc(obj.main.temp)}°C`;
  country.textContent = obj.sys.country;
  humidity.textContent = `Humidity: ${obj.main.humidity}%`;
  wind_speed.textContent = `${obj.wind.speed} km/h`;
  deg_wind.textContent = degToCardinal(obj.wind.deg);
};

const getWeather_dos = (city) => {
  const key = "fc542c16b4298cc10a5d09ac11fb5aeb";
  const URI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${key}`;

  const xhr = new XMLHttpRequest();
  function onRequestHandler() {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      displaydata2(data);
    }
  }
  xhr.addEventListener("load", onRequestHandler);
  xhr.open("GET", URI, true);
  xhr.send();
};
