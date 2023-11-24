export class User {
	private id: string;
	constructor(
		public firstName: string,
		public lastName: string,
		public phone: string,
		private password: string,
		public email: string
	) {}

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


