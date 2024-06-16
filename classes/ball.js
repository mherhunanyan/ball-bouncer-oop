import { getRandomNumber } from "../helper/getRandomNumber.js";
import { ballSize, cardSize, speedBall } from "../constants.js";

export class Ball {
    constructor(parentElement) {
        this.ball = document.createElement("span");
        this.ball.classList.add("ball");
        this.ball.style.width = ballSize.width + "px";
        this.ball.style.height = ballSize.height + "px";
        this.ball.style.top = "20px";
        parentElement.appendChild(this.ball);
        this.html = this.ball;
    }

    generateRandomBallPosition() {
        let countLeft = parseInt(this.html.style.left) || 0;
        countLeft = getRandomNumber(20, cardSize.width + 20 - ballSize.width);
        this.html.style.left = countLeft + "px";
    }

    goToBottom() {
        let countTop = parseInt(this.html.style.top) || 0;
        const bottomBound = cardSize.height - ballSize.height;
        console.log(bottomBound);
        const setIntervalId = setInterval(() => {
            if (countTop < bottomBound + 30) {
                countTop += 10;
                this.html.style.top = countTop + "px";
            } else {
                clearInterval(setIntervalId);
            }
        }, speedBall.bottom);
    }
}
