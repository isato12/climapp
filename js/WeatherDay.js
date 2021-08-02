const icon_uno = document.querySelector("#icon_uno");
const days = document.querySelectorAll("days");
const description_uno = document.querySelector("#description_uno");
const deg_uno = document.querySelector("#deg_uno");

const icon_dos = document.querySelector("#icon_dos");
const description_dos = document.querySelector("#description_dos");
const deg_dos = document.querySelector("#deg_dos");

const icon_tres = document.querySelector("#icon_tres");
const description_tres = document.querySelector("#description_tres");
const deg_tres = document.querySelector("#deg_tres");

const displayDatas = (obj) => {
  const icon = obj.daily[0].weather[0].icon;
  const addIcon = document.createElement("IMG");
  addIcon.setAttribute("src", `img/icons/${icon}.svg`);
  icon_uno.appendChild(addIcon);

  for (let i = 1; i < 4; i++) {
    const time = obj.daily[i].dt;

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = new Date(time * 1000);
    console.log(typeof day);
  }
};

let cards = (lat, lon) => {
  const key = "fc542c16b4298cc10a5d09ac11fb5aeb";

  const URL = `https://api.openweathermap.org/data/2.5/onecall?&lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.response);
      console.log(data);
      displayDatas(data);
    }
  });
  xhr.open("GET", URL);
  xhr.send();
};
