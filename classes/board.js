import { boardSize } from "../constants.js";

export class Board {
    constructor(parenElement) {
        this.board = document.createElement("button");
        this.board.classList.add("board");
        this.board.style.width = boardSize.width + "px";
        this.board.style.height = boardSize.height + "px";
        parenElement.appendChild(this.board);
        this.html = this.board;
    }
}
