import "/styles/index.scss";
import { sendRequest } from "/scripts/request";
import { Card } from "/scripts/Card";


let cards = "";
const $field = document.querySelector(".example-field");
const $inputF = document.querySelector('.filter__input');

sendRequest()
  .then((data) => {
    createElements(data);
  })
  .catch((err) => {
    console.log(`%c${err}`, "color: red");
  });

let createElements = (data) => {
    for (const key in data) {
        const element = data[key];
        let card = new Card(element);
        cards += card.strCard;
      }
      $field.innerHTML = cards;
};

$inputF.addEventListener('change', () => {
    console.log(this.value);
});