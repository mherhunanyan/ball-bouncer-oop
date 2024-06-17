import {
    ballSize,
    boardSize,
    cardSize,
    colors,
    speedBall,
} from "../constants.js";
import { randomGenerateColor } from "../helper/randomGenerateColor.js";
import { getRandomNumber } from "../helper/getRandomNumber.js";

export class Ball {
    constructor(parentElement) {
        this.ball = document.createElement("span");
        this.ball.classList.add("ball");
        this.ball.style.width = ballSize.width + "px";
        this.ball.style.height = ballSize.height + "px";
        this.ball.style.top = "20px";
        this.ball.style.left = "20px";
        this.ball.style.backgroundColor = randomGenerateColor(colors);
        parentElement.appendChild(this.ball);
        this.html = this.ball;
    }

    generateRandomBallPosition() {
        let countLeft = parseInt(this.ball.style.left) || 0;
        countLeft = getRandomNumber(20, cardSize.width + 20 - ballSize.width);
        this.ball.style.left = countLeft + "px";
    }

    goToBottom() {
        const board = document.querySelector(".board");

        const setIntervalId = setInterval(() => {
            let countTop = parseInt(this.ball.style.top) || 0;
            const bottomBound = cardSize.height - ballSize.height;
            const ballLeft = parseInt(this.ball.style.left) || 0;
            const boardLeft = parseInt(board.style.left) || 0;
            if (countTop < bottomBound + 30) {
                if (
                    ballLeft >= boardLeft - 15 &&
                    ballLeft <= boardLeft + boardSize.width + 5 &&
                    countTop >= bottomBound - boardSize.height + 5
                ) {
                    this.ball.remove();
                    clearInterval(setIntervalId);
                }
                countTop += 10;
                this.ball.style.top = countTop + "px";
            } else {
                this.ball.remove();
                clearInterval(setIntervalId);
            }
        }, speedBall.bottom);
    }
}
