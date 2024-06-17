import { timerStart } from "../constants.js";

export class Timer {
    constructor(parentElement) {
        this.timer = document.createElement("span");
        this.timer.classList.add("timer");
        this.timer.innerHTML = timerStart;
        parentElement.appendChild(this.timer);
    }

    setTimer() {
        return setInterval(() => {
            const timerTextContent = this.timer.textContent;
            let currentHour = +timerTextContent[0].concat(timerTextContent[1]);
            let currentSecond = +timerTextContent[3].concat(
                timerTextContent[4]
            );
            if (timerTextContent[3] === "0" && timerTextContent[4] === "0") {
                if (currentHour > 0) {
                    currentHour--;
                    currentSecond = 60;
                }
            }
            currentSecond--;
            if (currentHour < 10) {
                this.timer.innerHTML = `0${currentHour}:`;
            } else {
                this.timer.innerHTML = `${currentHour}`;
            }
            if (currentSecond < 10) {
                this.timer.innerHTML += `0${currentSecond}`;
            } else {
               this.timer.innerHTML += `${currentSecond}`;
            }
        }, 1000);
    }
}
