//object1
const city_tres = document.querySelector("#city_tres");
const country_dos = document.querySelector("#country_dos");
const deg_cinco = document.querySelector("#deg_cinco");
const icon_cinco = document.querySelector("#icon_cinco");
const humidity_dos = document.querySelector("#humidity_dos");
const deg_wind_dos = document.querySelector("#deg_wind_dos");
const wind_speed_dos = document.querySelector("#wind_speed_dos");

const degToCardinal = (deg) => {
  let cardinalPoints = [
    "Nordeste",
    "Este",
    "Sudeste",
    "Sur",
    "Sudoeste",
    "West",
    "Noroeeste",
    "Norte",
  ];
  let index = deg - 22.5;
  if (index < 0) index += 360;
  index = parseInt(index / 45);
  return cardinalPoints[index];
};

const displaydata3 = (obj) => {
  city_tres.textContent = obj.name; //para obtener nombre, no funciona por ahora
  const iconW = obj.weather[0].icon; //obtener icono
  const addIcon = document.createElement("IMG");
  addIcon.setAttribute("src", `img/icons/${iconW}.svg`);
  icon_cinco.appendChild(addIcon);
  deg_cinco.textContent = `${Math.trunc(obj.main.temp)}°C`;
  country_dos.textContent = obj.sys.country;
  humidity_dos.textContent = `Humidity: ${obj.main.humidity}%`;
  wind_speed_dos.textContent = `${obj.wind.speed} km/h`;
  deg_wind_dos.textContent = degToCardinal(obj.wind.deg);
};

const getWeather_tres = (city) => {
  const key = "fc542c16b4298cc10a5d09ac11fb5aeb";
  const URI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${key}`;

  const xhr = new XMLHttpRequest();
  function onRequestHandler() {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      console.log(data);
      displaydata3(data);
    }
  }
  xhr.addEventListener("load", onRequestHandler);
  xhr.open("GET", URI, true);
  xhr.send();
};
