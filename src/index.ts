import "./main.css";

import "./1shart";

const contener: HTMLDivElement = document.querySelector(".contener")!;
const contener1: HTMLDivElement = document.querySelector(".contener1")!;

const contener2: HTMLDivElement = document.querySelector(".contener2")!;

// let internet = true;
let internet = false;



// Parallax Code
let parallax: number = 10;

console.log(parallax);

const getData = () => {
	return new Promise((bor, yoq) => {
		if (internet) {
			bor("salom");
		} else {
			yoq("yoq");
		}
	});
};
getData()
	.then((data) => {
		if (internet) {
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

			console.log(data);

		}
	})
	.catch((dat) => {


		console.log(dat);
		contener.style.display = "none";
		contener1.style.display = "none";
		contener2.style.display = "inline-block";
	});
