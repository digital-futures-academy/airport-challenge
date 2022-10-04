class Airport {
	// here's a starting point for you
	#planesList;
	#capacity;
	constructor() {
		this.#planesList = [];
		this.#capacity = 5;
	}
	landPlane(plane) {
		this.#planesList.push(plane);
		return `The plane ${this.#planesList[0].getFlightNum()} has landed`;
	}
	getPlanesList() {
		return this.#planesList;
	}
	getCapacity() {
		return this.#capacity;
	}
}

module.exports = Airport;
