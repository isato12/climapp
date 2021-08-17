const icon_uno = document.querySelector("#icon_uno");
const day = document.querySelectorAll("#day");
const description_uno = document.querySelector("#description_uno");
const deg_uno = document.querySelector("#deg_uno");

const icon_dos = document.querySelector("#icon_dos");
const day_uno = document.querySelectorAll("#day_uno");
const description_dos = document.querySelector("#description_dos");
const deg_dos = document.querySelector("#deg_dos");

const icon_tres = document.querySelector("#icon_tres");
const day_dos = document.querySelectorAll("#day_dos");
const description_tres = document.querySelector("#description_tres");
const deg_tres = document.querySelector("#deg_tres");

function getDayName(dt) {
  const tiempo = new Date(dt * 1000).getDay();
  semana = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return semana[tiempo];
}

const displayData_uno = (obj) => {
  const icon = obj.daily[1].weather[0].icon;
  const addIcon = document.createElement("IMG");
  addIcon.setAttribute("src", `img/icons/${icon}.svg`);
  icon_uno.appendChild(addIcon);
  description_uno.textContent = obj.daily[1].weather[0].main;
  deg_uno.textContent = `${Math.floor(obj.daily[1].temp.min)}°/${Math.floor(
    obj.daily[1].temp.max
  )}°`;
  day.textContent = getDayName(obj.daily[1].dt);
};

const displayData_dos = (obj) => {
  const icon = obj.daily[2].weather[0].icon;
  const addIcon = document.createElement("IMG");
  addIcon.setAttribute("src", `img/icons/${icon}.svg`);
  icon_dos.appendChild(addIcon);
  description_dos.textContent = obj.daily[2].weather[0].main;
  deg_dos.textContent = `${Math.floor(obj.daily[2].temp.min)}°/${Math.floor(
    obj.daily[2].temp.max
  )}°`;
  day.textContent = getDayName(obj.daily[2].dt);
};

const displayData_tres = (obj) => {
  const icon = obj.daily[3].weather[0].icon;
  const addIcon = document.createElement("IMG");
  addIcon.setAttribute("src", `img/icons/${icon}.svg`);
  icon_tres.appendChild(addIcon);
  description_tres.textContent = obj.daily[3].weather[0].main;
  deg_tres.textContent = `${Math.floor(obj.daily[3].temp.min)}°/${Math.floor(
    obj.daily[3].temp.max
  )}°`;
  day.textContent = getDayName(obj.daily[3].dt);
};

const cards = (lat, lon) => {
  const key = "fc542c16b4298cc10a5d09ac11fb5aeb";

  const URL = `https://api.openweathermap.org/data/2.5/onecall?&lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.response);
      displayData_uno(data);
      displayData_dos(data);
      displayData_tres(data);
      getDayName(data);
    }
  });
  xhr.open("GET", URL);
  xhr.send();
};
