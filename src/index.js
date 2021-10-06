import "/styles/index.scss";
import { sendRequest } from "/scripts/request"; // module for making a xhr request
import { Card } from "/scripts/Card"; // module for creating a cards with examples of works

let cards = ""; // we will put here out html with data from JSON
let titles = []; // Titles for filter
let i = 0; // iterater
const $field = document.querySelector(".example-field");
const $inputF = document.querySelector(".filter__input");

sendRequest() //send request
  .then((data) => {
    createElements(data); //after promise represent our data to site
  })
  .catch((err) => {
    console.log(`%c${err}`, "color: red");
  });

let createElements = (data) => {
  for (const key in data) {
    const element = data[key];
    let card = new Card(element);
    cards += card.strCard;
    titles[i] = element?.title;
    i++;
  }
  i = 0;
  $field.innerHTML = cards;
};

$inputF.addEventListener("input", (e) => {
  let input = e.target.value.toLowerCase();
  let chekcer = 0;

  for (let i = 0; i < titles.length; i++) {
    if (input.length > 2) {
      if (!titles[i].toLowerCase().includes(input)) {
        document.getElementById(i + 1).classList.add("hide");
        chekcer++;
      }
    } else {
      document.getElementById(i + 1).classList.remove("hide");
    }
    if (i == titles.length - 1) {
      checkResult(chekcer);
      console.log('chekcer: ', chekcer);
    }
  }
});

$field.addEventListener("click", (e) => {
  let id = 0;

  for (let i = 0; i < 3; i++) {
    if (e.path[i].id) {
      id = e.path[i].id;
      console.log("id: ", id);
      break;
    }
  }

  if (e.target.className.toString().includes("card")) {
    window.location.href = `${window.location.href}details/${id}`;
  }
});

let checkResult = (chekcer) => {
  if (chekcer == 12) {
    showHideResults(false);
  } else {
    showHideResults(true);
  }
};

let showHideResults = (flag) => {
  if (flag) {
    document.querySelector(".noResults").classList.add("hide");
  } else {
    document.querySelector(".noResults").classList.remove("hide");
  }
};
