// import { store } from "../helper/store.js";
// import { start } from "../start.js";

export const keyDownHandler = (event) => {
    const board = document.querySelector(".board");
    if (event.code === "ArrowLeft") {
        let countLeft = parseInt(board.style.left) || 0;
        if (countLeft > 20) {
            countLeft -= 20;
            board.style.left = countLeft + "px";
        }
        // if (!store.startCalled) {
        //     start();
        //     store.startCalled = true;
        // }
    } else if (event.code === "ArrowRight") {
        let countLeft = parseInt(board.style.left) || 0;
        if (countLeft <= 1020) {
            countLeft += 20;
            board.style.left = countLeft + "px";
        }
        // if (!store.startCalled) {
        //     start();
        //     store.startCalled = true;
        // }
    }
};