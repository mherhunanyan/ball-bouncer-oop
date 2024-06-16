import { cardSize } from "../constants.js";

export class Card {
    constructor(parenElement) {
        this.card = document.createElement("button");
        this.card.classList.add("card");
        this.card.style.width = cardSize.width + "px";
        this.card.style.height = cardSize.height + "px";
        parenElement.appendChild(this.card);
        this.html = this.card;
    }
}
