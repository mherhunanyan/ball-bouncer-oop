import { cardSize } from "../constants.js";

export class Card {
    constructor(parenElement) {
        this.element = document.createElement("button");
        this.element.classList.add("card");
        this.element.style.width = cardSize.width + "px";
        this.element.style.height = cardSize.height + "px";
        parenElement.appendChild(this.element);
    }
}
