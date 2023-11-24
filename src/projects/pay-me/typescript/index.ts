import { faker } from "@faker-js/faker";
import { CARD_TYPE } from "./entities/card";
import { BANK_NAME } from "./entities/card";
import { getRandomCardType } from "./entities/card";
import { getRandomBank } from "./entities/card";
//DOM VARIABLES
const inputUsers: HTMLInputElement = document.querySelector(".input-users")!;
const inputCards: HTMLInputElement = document.querySelector(".input-cards")!;
const form: HTMLFormElement = document.querySelector("form")!;
const tableBody: HTMLElement = document.querySelector(".tbody-1")!;
const tableHead: HTMLElement = document.querySelector(".thead-1")!;
const tableBody2: HTMLElement = document.querySelector(".tbody-2")!;
const tableHead2: HTMLElement = document.querySelector(".thead-2")!;
const tr: HTMLElement = document.querySelector(".tr1")!;
const tr2: HTMLElement = document.querySelector(".tr2")!;
const table2: HTMLElement = document.querySelector(".table-2")!;

// inputCards.setAttribute(`${inputUsers.value}`, "min");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	//APPEND TITLE
	tr.innerHTML = `<th scope="col">#</th>
	<th scope="col">First Name</th>
	<th scope="col">Last Name</th>
	<th scope="col">Phone Number</th>
	<th scope="col">Email</th>
	<th scope="col">Password</th>
	<th scope="col">CARD</th`;
	tableHead.appendChild(tr);

	//RANDOM CARDS
	const result1 = inputUsers.value;
	const result2 = inputCards.value;
	const res1 = Math.floor(+result2 / +result1);
	let res2 = +result2 - res1 * Number(result1);
	let Element: number[] = [];
	function rand() {
		for (let i = 0; i < +result1; i++) {
			Element[i] = res1;
		}
		return rand2();
	}
	rand();

	function rand2() {
		for (let i = 0; i < res2; i++) {
			Element[Math.floor(Math.random() * Number(result1))] += 1;
		}
	}
	inputCards.setAttribute("min", result1);
	let number1: number[] = [];
	for (let i = 0; i < +result1; i++) {
		number1[i] = Element[i];

		//FAKER USERS
		const firstName = faker.name.firstName();
		const lastName = faker.name.lastName();
		const email = faker.internet.email();
		const phoneNumber = faker.phone.number("+998 9# ###-##-##");
		const passwordUser = faker.internet.password(8, false, /[a-z0-9]/g);

		//Users
		class User {
			private id: string;
			constructor(
				public firstName: string,
				public lastName: string,
				public phone: string,
				private password: string,
				public email: string
			) {}
			render() {
				const tr = document.createElement("tr");

				tr.innerHTML = `
         <th scope="row">${i + 1}</th>
         <td>${firstName}</td>
         <td>${lastName}</td>
         <td>${phoneNumber}</td>
         <td>${email}</td>
         <td>${passwordUser}</td>
         <td class="elm" id="eye${i}">${Element[i]} </td>
         <td class="icon" id="eye${i}">👁️‍🗨️</td>
       `;
				tableBody.appendChild(tr);
				const icons: NodeListOf<HTMLElement> = document.querySelectorAll(".icon")!;
				icons.forEach((icon) => {
					const tr = icon.closest("tr");
					if (tr) {
						icon.addEventListener("mousemove", () => {
							tr.classList.add("hover");
						});
					}
					if (tr) {
						icon.addEventListener("mouseleave", () => {
							tr.classList.remove("hover");
						});
					}
					icon.addEventListener("click", () => {
						// tr?.remove();
						res2 = 0;
						table2.style.display = "block";
					});
				});
			}
			setId(id: string) {
				this.id = id;
			}

			getId() {
				return this.id;
			}

			setPassword(password: string) {
				this.password = password;
			}

			getPassword() {
				return this.password;
			}
		}

		new User(firstName, lastName, phoneNumber, passwordUser, email).render();
	}

	const tableId: NodeListOf<HTMLElement> = document.querySelectorAll(".icon")!;
	const elmId: NodeListOf<HTMLElement> = document.querySelectorAll(".elm")!;

	tableId.forEach((e) => {
		elmId.forEach((even) => {
			let eId = e.id;
			let itemId: any = even.id;
			// console.log(itemId);

			// console.log(e.id);
			e.addEventListener("click", () => {
				if (eId === itemId) {
					// console.log(even.textContent);
					//CARDS
					let value = even.textContent;
					for (let i = 1; i <= +value!; i++) {
						//FAKER CARDS
						const randomCardType: CARD_TYPE = getRandomCardType();
						const randomBank: BANK_NAME = getRandomBank();
						const cardNumber = faker.finance.creditCardNumber({ issuer: "8600-####-####-####" });
						const cardPinCode = faker.finance.pin();
						const cardCVV = faker.finance.creditCardCVV();
						const ownerId = faker.finance.creditCardNumber({ issuer: "######" });
						const randomDay = faker.number.bigInt({ min: 1, max: 31 });
						const randomDate = new Date(`2023-11-${randomDay}`);
						const cardExpiry = `${randomDate
							.getDate()
							.toString()
							.padStart(2, "0")}/${faker.number.bigInt({
							min: 25,
							max: 35,
						})}`;

						tr2.innerHTML = `<th scope="col">#</th>
				<th scope="col">Card's Number</th>
				<th scope="col">Card's Pin</th>
				<th scope="col">Card's Expire</th>
				<th scope="col">Car's CVV</th>
				<th scope="col">Card's Type</th>
				<th scope="col">Card's ID</th>
				<th scope="col">Bank Name</th`;
						tableHead2.appendChild(tr2);
						const icons: NodeListOf<HTMLElement> = document.querySelectorAll(".icon")!;
						class Card {
							private id: string;
							private balance = 0;

							constructor(
								public number: string,
								public pin: string,
								public expiry: string,
								public CVV: string,
								public type: CARD_TYPE,
								public ownerId: string,
								public bankName: BANK_NAME
							) {}
							render() {
								const tr = document.createElement("tr");

								tr.innerHTML = `<th scope="row">${i}</th>
								<td>${cardNumber}</td>
								<td>${cardPinCode}</td>
								<td>${cardExpiry}</td>
								<td>${cardCVV}</td>
								<td>${randomCardType}</td>
								<td>${ownerId} </td>
								<td>${randomBank} </td>
								<td class="icon2">❌</td>`;
								tableBody2.appendChild(tr);
								const icons2: NodeListOf<HTMLElement> = document.querySelectorAll(".icon2")!;
								icons2.forEach((icon) => {
									const tr2 = icon.closest("tr");
									if (tr2) {
										icon.addEventListener("mousemove", () => {
											tr2.classList.add("hover");
										});
									}
									if (tr2) {
										icon.addEventListener("mouseleave", () => {
											tr2.classList.remove("hover");
										});
									}
									icon.addEventListener("click", () => {
										itemId - 1;
										tr2?.remove();
										// Element[i - 1];
									});
								});
							}

							setId(id: string) {
								this.id = id;
							}

							getId() {
								return this.id;
							}

							setBalance(balance: number) {
								this.balance = balance;
							}
							getBalance() {
								return this.balance;
							}
						}
						new Card(
							cardNumber,
							cardPinCode,
							cardExpiry,
							cardCVV,
							randomCardType,
							cardCVV,
							randomBank
						).render();
					}
				}
			});
		});
	});
});

const btnReset: HTMLButtonElement = document.querySelector(".reset")!;
btnReset.addEventListener("click", () => {
	tableBody2.innerHTML = "";
});
