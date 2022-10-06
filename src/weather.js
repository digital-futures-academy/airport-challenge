class Weather {
	#stormy;
	constructor() {
		this.#stormy = false;
		let boolval = Math.round(Math.random());
		if (boolval === 1) {
			this.#stormy = true;
		}
	}
	getStormy() {
		return this.#stormy;
	}
}

module.exports = Weather;
