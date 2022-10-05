class Airport {
	// here's a starting point for you
	#airportPlanes;
	#capacity;
	constructor(capacity = 5) {
		this.#airportPlanes = [];
		this.#capacity = capacity;
	}
	landPlane(plane) {
		if (this.isInAirport(plane)) {
			return `The ${plane.getFlightNum()} plane has already landed.`;
		} else {
			if (this.isAirportFull()) {
				return `The airport is full so the ${plane.getFlightNum()} plane can not land right now.`;
			} else {
				this.#airportPlanes.push(plane);
				return `The plane ${this.#airportPlanes[0].getFlightNum()} has landed`;
			}
		}
	}
	departPlane(plane) {
		if (this.isInAirport(plane)) {
			this.#airportPlanes.splice(this.#airportPlanes.indexOf(plane));
			return `The plane ${plane.getFlightNum()} has departed`;
		} else {
			return `The ${plane.getFlightNum()} plane is not at the airport.`;
		}
	}
	isInAirport(plane) {
		let planeIsInAirport = false;
		for (let flight of this.#airportPlanes) {
			if (flight.getFlightNum() === plane.getFlightNum()) {
				planeIsInAirport = true;
			}
		}
		return planeIsInAirport;
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
