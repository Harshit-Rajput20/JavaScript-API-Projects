const url = "https://api.quotable.io/random";

const btn = document.getElementById("btn");
const contain = document.getElementById("contain");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteUpdater = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      quote.innerText = data.content;
      author.innerHTML = data.author;
    });
};
btn.addEventListener("click", quoteUpdater);
quoteUpdater();
