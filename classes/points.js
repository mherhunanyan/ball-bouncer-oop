export class Points {
    constructor(parentElement) {
        this.points = document.createElement("span");
        this.points.classList.add("points");
        this.points.innerHTML = "00";
        parentElement.appendChild(this.points);
        this.html = this.points;
    }
}
