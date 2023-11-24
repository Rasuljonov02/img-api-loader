import "./main.css";

import "./1shart";

const contener: HTMLDivElement = document.querySelector(".contener")!;
const contener1: HTMLDivElement = document.querySelector(".contener1")!;

let i = 0;
let taim = setTimeout(function updateDisplay() {
    if (i < 3) {
        i++;
        taim = setTimeout(updateDisplay, 1000);
    } else {
        contener.style.display = "grid";
        contener1.style.display = "none";
    }
}, 1000);
