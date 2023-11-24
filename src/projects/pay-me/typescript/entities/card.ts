export type CARD_TYPE = "UZCARD" | "HUMO" | "VISA";
const cardTypes: string[] = ["UZCARD", "HUMO", "VISA", "UnionPay", "MASTERCARD"];

export function getRandomCardType(): CARD_TYPE {
	const randomIndex: number = Math.floor(Math.random() * cardTypes.length);
	return cardTypes[randomIndex] as CARD_TYPE;
}

export type BANK_NAME = "TBC" | "NBU" | "KAPITAL_BANK";
const bankTypes: string[] = ["TBC", "NBU", "KAPITAL_BANK"];

export function getRandomBank(): BANK_NAME {
	const randomIndex: number = Math.floor(Math.random() * bankTypes.length);
	return bankTypes[randomIndex] as BANK_NAME;
}

export class Card {
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
