const $field = document.querySelector(".example-field");

export class Card {
  constructor(element) {
    let card = `<div class="card">
    <div class="card__img"></div>
    <div>${element?.title}</div>
    <div>${element?.address}</div>
    <div>New Properties for Sale from &#163${element?.price}</div>
    <div>${element?.type}</div>
    </div>`;
  }
}
