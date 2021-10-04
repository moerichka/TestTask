import "/styles/index.scss";
import { sendRequest } from "/scripts/request";
import { Card } from "/scripts/Card";

let cards = []; // array of cards
let i = 0; // iterator

sendRequest()
  .then((data) => {
    console.log(data);
    for (const key in data) {
      const element = data[key];
      let card = new Card(element);
      cards[i] = card;
      i++;
    }
    console.log('cards: ', cards);
  })
  .catch((err) => {
    console.log(`%c${err}`, "color: red");
  });
