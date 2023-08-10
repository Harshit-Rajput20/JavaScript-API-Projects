let cityInp = document.getElementById("city");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");

let getWeather = () => {
  const cityValue = cityInp.value;
  if (cityValue.length == 0) {
    result.innerHTML = `
        <h3 class="msg">please enter a city name</h3>
        
        `;
  } else {
    // const key = "d9e0fc277daee1e1a9dad1c05377a8ec";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        result.innerHTML = `<h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.main.temp_min}&#176;</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_max}&#176;</h4>
            </div>
        </div>`;
      })
      .catch(() => {
        result.innerHTML = `
            <h3>failer</h3>`;
      });
  }
};

searchBtn.addEventListener("click", getWeather);
// window.addEventListener("load", getWeather);
