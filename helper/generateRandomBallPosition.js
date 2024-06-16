import { ballSize, cardSize } from "../constants.js";
import { getRandomNumber } from "./getRandomNumber.js";

export const generateRandomBallPosition = (ball) => {
    let countLeft = parseInt(ball.style.left) || 0;
    countLeft = getRandomNumber(20, cardSize.width + 20 - ballSize.width);
    ball.style.left = countLeft + "px";
};
