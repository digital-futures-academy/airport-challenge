class Airport {
	// here's a starting point for you
	#airportPlanes;
	#capacity;
	constructor(capacity = 5) {
		this.#airportPlanes = [];
		this.#capacity = capacity;
	}
	landPlane(plane) {
		this.#airportPlanes.push(plane);
		return `The plane ${this.#airportPlanes[0].getFlightNum()} has landed`;
	}
	isAirportFull() {
		let full = false;
		if (this.#airportPlanes.length === this.#capacity) {
			full = true;
		}
		return full;
	}
	getAirportPlanes() {
		return this.#airportPlanes;
	}
	getCapacity() {
		return this.#capacity;
	}
}

module.exports = Airport;
