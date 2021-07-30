console.log("jalando");

let cards = (lat, lon) => {
  const key = "fc542c16b4298cc10a5d09ac11fb5aeb";

  const URL = `https://api.openweathermap.org/data/2.5/onecall?&lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.response);
      console.log(data);
    }
  });
  xhr.open("GET", URL);
  xhr.send();
};
