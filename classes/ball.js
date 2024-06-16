export class Ball {
    constructor(parentElement) {
        this.element = document.createElement("span");
        this.element.classList.add("ball");
        this.element.style.width = ballSize.width + "px";
        this.element.style.height = ballSize.height + "px";
        parentElement.appendChild(this.element);
    }
}
