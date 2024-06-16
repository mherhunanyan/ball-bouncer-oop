import { finalTime } from "../constants.js";
import { generateRandomBallPosition } from "../helper/generateRandomBallPosition.js";
import { Ball } from "./ball.js";
import { Board } from "./board.js";
import { Card } from "./card.js";

export class Game {
    constructor(parentElement) {
        this.card = new Card(parentElement);
        this.board = new Board(this.card.html);
    }
    start() {
        let nestedInterval;
        const setIntervalId = setInterval(() => {
            nestedInterval = setInterval(() => {
                const ball = new Ball(this.card.html);
                ball.generateRandomBallPosition();
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
