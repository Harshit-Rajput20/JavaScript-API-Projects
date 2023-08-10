const url = " https://pokeapi.co/api/v2/pokemon/";

const btn = document.getElementById("btn");
const card = document.getElementById("card");

let getPokeData = () => {
  let id = Math.floor(Math.random() * 150 + 1);
  let finalUrl = url + id;
  console.log(finalUrl);
  fetch(finalUrl)
    .then((res) => res.json())
    .then((data) => {
      generateCard(data);
    });
};

let generateCard = (data) => {
  console.log(data);
  card.innerHTML = `
  <p class="hp">
  <span>HP</span>
  80
</p>
<img src="${data.sprites.other.dream_world.front_default}" />
<h2 class="poke-name">${data.name}</h2>
<div class="types">
  <span>type 1</span>
  <span>type 2</span>
</div>
<div class="stats">
  <div>
    <h3>${data.stats[1].base_stat}</h3>
    <p>Attack</p>
  </div>
  <div>
    <h3>${data.stats[2].base_stat}</h3>
    <p>Defence</p>
  </div>
  <div>
    <h3>${data.stats[5].base_stat}</h3>
    <p>Speed</p>
  </div>
</div>

  `;
};
btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);
