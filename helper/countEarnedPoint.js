export const countEarnedPoint = (element) => {
    if (element.style.backgroundColor === "black") {
        return 5;
    } else if (element.style.backgroundColor === "blue") {
        return 10;
    } else if (element.style.backgroundColor === "red") {
        return 15;
    }
};
