import { minPoints } from "../constants.js";

export class UserStatus {
    constructor(parentElement) {
        this.userStatus = document.createElement("span");
        this.userStatus.classList.add("userStatus");
        parentElement.appendChild(this.userStatus);
    }

    checkUserStatus(userEarnedPoints) {
        if (userEarnedPoints > minPoints) {
            this.userStatus.innerHTML = "You are win";
            this.userStatus.style.color = "green";
        } else {
            this.userStatus.innerHTML = "You are lose";
            this.userStatus.style.color = "red";
        }
    }
}
