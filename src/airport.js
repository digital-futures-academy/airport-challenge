class Airport {
	// here's a starting point for you
	#planesList;
	constructor() {
		this.#planesList = [];
	}
	landPlane(plane) {
		this.#planesList.push(plane);
	}
	getPlanesList() {
		return this.#planesList;
	}
}

module.exports = Airport;
