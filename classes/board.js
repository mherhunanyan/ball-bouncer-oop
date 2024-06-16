import { boardSize } from "../constants.js";

export class Board {
    constructor(parenElement) {
        this.element = document.createElement("button");
        this.element.classList.add("board");
        this.element.style.width = boardSize.width + "px";
        this.element.style.height = boardSize.height + "px";
        parenElement.appendChild(this.element);
    }
}
