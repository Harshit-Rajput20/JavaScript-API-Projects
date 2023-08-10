const url = "http://numbersapi.com/";
const getFact = document.getElementById("get-fact-btn");
const getNum = document.getElementById("num");
let factAns = document.querySelector(".fact");
const getRand = document.getElementById("ran-fact-btn");

const getFactHandler = () => {
  let num = Number(getNum.value);
  geturl(num);
};

const geturl = (factNo) => {
  let finalUrl = url + factNo;
  console.log(factNo);

  if (factNo) {
    console.log("Test point 0" + factNo >= 0, factNo <= 300);
    if (factNo >= 0 && factNo <= 300) {
      console.log("Test point 1");
      fetch(finalUrl)
        .then((res) => res.text())
        .then((data) => {
          console.log(data);
          factAns.style.display = "block";
          factAns.innerHTML = `
        <h2>${factNo}</h2>
        <p>${data}</p>`;
        });
    } else {
      factAns.style.display = "block";
      factAns.innerHTML = `<p class="msg">please enter a number between 0and  300`;
    }
  } else {
    factAns.style.display = "block";
    factAns.innerHTML = `<p class="msg">input field  can not be empty<p>`;
  }
};

const getRandUrl = () => {
  let randNum = Math.floor(Math.random() * 301);
  getNum.value = randNum;
  geturl(Number(randNum));
  // let finalUrl = url + randNum;
  // if (randNum) {
  //   if (num >= 0 && num <= 30) {
  //     fetch(finalUrl)
  //       .then((res) => res.text())
  //       .then((data) => {
  //         console.log(data);
  //         factAns.style.display = "block";
  //         factAns.innerHTML = `
  //     <h2>${num}</h2>
  //     <p>${data}</p>`;
  //       });
  //   } else {
  //     factAns.style.display = "block";
  //     factAns.innerHTML = `<p class="msg">please enter a number between 0and  300`;
  //   }
  // } else {
  //   factAns.style.display = "block";
  //   factAns.innerHTML = `<p class="msg">input field  can not be empty<p>`;
  // }
};

getFact.addEventListener("click", getFactHandler);
getRand.addEventListener("click", getRandUrl);
