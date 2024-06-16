import { getRandomNumber } from "../helper/getRandomNumber.js";
import { ballSize, cardSize } from "../constants.js";

export class Ball {
    constructor(parentElement) {
        this.ball = document.createElement("span");
        this.ball.classList.add("ball");
        this.ball.style.width = ballSize.width + "px";
        this.ball.style.height = ballSize.height + "px";
        parentElement.appendChild(this.ball);
        this.html = this.ball;
    }

    generateRandomBallPosition() {
        let countLeft = parseInt(this.html.style.left) || 0;
        countLeft = getRandomNumber(20, cardSize.width + 20 - ballSize.width);
        this.html.style.left = countLeft + "px";
    }
}
