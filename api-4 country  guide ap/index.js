const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");

const GetCurencyName = (arr) => {
  return Object.keys(arr)[0];
};

searchBtn.addEventListener("click", () => {
  const countryInp = document.getElementById("country-inp");
  const countryInput = countryInp.value;
  const url = `https://restcountries.com/v3.1/name/${countryInput}?fullText=true`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(GetCurencyName(data[0].currencies));
      result.innerHTML = "";
      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img" />
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
          <div class="data-wrapper">
            <h4>capital:</h4>
            <span>${data[0].capital[0]}</span>
          </div>
        </div>
        <div class="wrapper">
          <div class="data-wrapper">
            <h4>continent:</h4>
            <span>>${data[0].continents[0]}</span>
          </div>
        </div>
        <div class="wrapper">
          <div class="data-wrapper">
            <h4>population:</h4>
            
            <span>${data[0].population}</span>
          </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
        <h4>currency:</h4>
        <span>>${
          data[0].currencies[GetCurencyName(data[0].currencies)].name
        } - ${
        data[0].currencies[GetCurencyName(data[0].currencies)].symbol
      }</span>
      </div>
        </div>
        <div class="wrapper">
          <div class="data-wrapper">
            <h4>common language:</h4>
            <span>${data[0].languages.hin}</span>
          </div>
        </div>`;
    });
});
