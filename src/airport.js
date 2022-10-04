class Airport {
	// here's a starting point for you
	#planesList;
	constructor() {
		this.#planesList = [];
	}
	landPlane(plane) {
		this.#planesList.push(plane);
		return `The plane ${this.#planesList[0].getFlightNum()} has landed`;
	}
	getPlanesList() {
		return this.#planesList;
	}
	getCapacity() {}
}

module.exports = Airport;
