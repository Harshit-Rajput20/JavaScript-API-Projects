const jokecontainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit&type=single";

let getJokes = () => {
  jokecontainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokecontainer.textContent = `${item.joke}`;
      jokecontainer.classList.add("fade");
    });
};

btn.addEventListener("click", getJokes);
