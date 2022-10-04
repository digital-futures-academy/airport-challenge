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
	isAirportFull() {}
	getAirportPlanes() {
		return this.#airportPlanes;
	}
	getCapacity() {
		return this.#capacity;
	}
}

module.exports = Airport;
