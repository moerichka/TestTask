export class Card {
  strCard;

  constructor(element) {
    this.strCard = `<div class="card card${this.color(element?.type)}">
    <div class="card__img img${element?.id}" id="${element?.id}"></div>
    <div class="card__title">${element?.title}</div>
    <div class="card__address">${element?.address}</div>
    <div class="card__cost">New Properties for Sale from <span class="bold">&#163 ${
      element?.price
    }</span></div>
    <div class="card__type">${element?.type}</div>
    </div>`;
  }

  color(type) {
    if (type === "IndependentLiving") return `-blue`;
    else return `-orange`;
  }
}
