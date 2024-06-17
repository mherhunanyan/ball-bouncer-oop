import { finalTime } from "../constants.js";
import { keyDownHandler } from "../eventHandlers/keyDownHandler.js";
import { generateRandomBallPosition } from "../helper/generateRandomBallPosition.js";
import { Ball } from "./ball.js";
import { Board } from "./board.js";
import { Card } from "./card.js";

export class Game {
    constructor(parentElement) {
        this.card = new Card(parentElement);
        this.board = new Board(this.card.html);
        this.isStartGame = false;
    }

    startOnArrowPress() {
        const body = document.querySelector("body");
        const keyDownHandler = (event) => {
            console.log(this.board.html);
            if (event.code === "ArrowLeft") {
                let countLeft = parseInt(this.board.html.style.left) || 0;
                if (countLeft > 20) {
                    countLeft -= 20;
                    this.board.html.style.left = countLeft + "px";
                }
                if (!this.isStartGame) {
                    this.start();
                    this.isStartGame = true;
                }
            } else if (event.code === "ArrowRight") {
                let countLeft = parseInt(this.board.html.style.left) || 0;
                if (countLeft <= 1020) {
                    countLeft += 20;
                    this.board.html.style.left = countLeft + "px";
                }
                if (!this.isStartGame) {
                    this.start();
                    this.isStartGame = true;
                }
            }
        };
        body.addEventListener("keydown", keyDownHandler);
    }

    start() {
        let nestedInterval;
        const setIntervalId = setInterval(() => {
            nestedInterval = setInterval(() => {
                const ball = new Ball(this.card.html);
                ball.generateRandomBallPosition();
                ball.goToBottom();
            }, 1000);

            setTimeout(() => {
                clearInterval(nestedInterval);
            }, 3000);
        }, 5000);

        setTimeout(() => {
            clearInterval(setIntervalId);
            clearInterval(nestedInterval);
        }, finalTime);
    }
}
