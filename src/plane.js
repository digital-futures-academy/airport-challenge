class Plane {
	#flightNum;
	constructor(flightNum) {
		this.#flightNum = flightNum;
	}
	getFlightNum() {
		return this.#flightNum;
	}
}

module.exports = Plane;
