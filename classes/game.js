import { UserStatus } from "./userStatus.js";
import { finalTime } from "../constants.js";
import { Points } from "./points.js";
import { Board } from "./board.js";
import { Timer } from "./timer.js";
import { Card } from "./card.js";
import { Ball } from "./ball.js";

export class Game {
    isStartGame = false;
    timerId;

    constructor(parentElement) {
        this.card = new Card(parentElement);
        this.board = new Board(this.card.html);
        this.container = document.querySelector(".container");
        this.timerPointsContainer = document.createElement("div");
        this.timerPointsContainer.classList.add("timerPointsContainer");
        this.container.appendChild(this.timerPointsContainer);
        this.timer = new Timer(this.timerPointsContainer);
        this.points = new Points(this.timerPointsContainer);
    }

    startOnArrowPress() {
        const body = document.querySelector("body");
        const keyDownHandler = (event) => {
            if (event.code === "ArrowLeft") {
                let countLeft = parseInt(this.board.html.style.left) || 0;
                if (countLeft > 20) {
                    countLeft -= 20;
                    this.board.html.style.left = countLeft + "px";
                }
                if (!this.isStartGame) {
                    this.timerId = this.timer.setTimer();
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
                    this.timerId = this.timer.setTimer();
                    this.start();
                    this.isStartGame = true;
                }
            }
        };
        body.addEventListener("keydown", keyDownHandler);
    }

    start() {
        console.log("start");

        let nestedInterval;
        const setIntervalId = setInterval(() => {
            nestedInterval = setInterval(() => {
                const ball = new Ball(this.card.html);
                ball.generateRandomBallPosition();
                ball.countBallPoint();
                ball.goToBottom();
            }, 1000);

            setTimeout(() => {
                clearInterval(nestedInterval);
            }, 3000);
        }, 5000);

        setTimeout(() => {
            clearInterval(this.timerId);
            clearInterval(setIntervalId);
            clearInterval(nestedInterval);
            this.end();
        }, finalTime);
    }

    end() {
        console.log("end");

        const userEarnedPoints = +this.points.html.textContent;
        const userStatus = new UserStatus(this.timerPointsContainer);
        userStatus.checkUserStatus(userEarnedPoints);
        const newGameButton = document.createElement("button");
        newGameButton.classList.add("newGameButton");
        newGameButton.innerHTML = "new Game";
        newGameButton.addEventListener("click", () => {
            this.container.innerHTML = "";
            const game = new Game(this.container);
            game.startOnArrowPress();
        });
        this.timerPointsContainer.appendChild(newGameButton);
    }
}
