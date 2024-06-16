import { Game } from "./classes/game.js";

const container = document.querySelector(".container");
const game = new Game(container);
game.start();
