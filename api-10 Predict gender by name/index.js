const btn = document.getElementById("submit");
const input = document.getElementById("name");
const wrapper = document.getElementById("wrapper");
const error = document.getElementById("error");

let getUrl = () => {
  let getName = input.value;
  const url = `https://api.genderize.io?name=${getName}`;
  wrapper.innerHTML = "";
  if (getName.length > 0) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let div = document.createElement("div");
        div.setAttribute("id", "info");
        div.innerHTML = `<h2 id="result-name">${data.name}</h2>
        <img src="" id="gender-icon"/>
        <h1 id="gender">${data.gender}</h1>
        <h4 id="prob">probability : ${data.probability}</h4>
                
        `;
        wrapper.append(div);
      });
  }
};

btn.addEventListener("click", getUrl);
