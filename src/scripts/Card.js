export class Card {
  strCard;

  constructor(element) {
    this.strCard = `<div class="card" id="${element?.id}">
    <div class="card__img img${element?.id}"><div class="card-${this.color(
      element?.type
    )}">${this.getNormalType(element?.type)}</div></div>
    <div class="wrap">
    <div class="card__title">${element?.title}</div>
    <div class="card__address">${element?.address}</div>
    <div class="card__cost">New Properties for Sale from <span class="bold">&#163 ${
      element?.price
    }</span></div>
    <div class="card__type">${this.getNormalType(element?.type)}</div>
    </div>
    </div>`;
  }

  color(type) {
    if (type === "IndependentLiving") return `blue`;
    else return `orange`;
  }
  getNormalType(type){
    return type.toString().replace(/([A-Z])/g, ' $1').trim(); // добавляем пробелы у заглавных букв и убираем первый
  }
}
