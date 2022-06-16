class Airport {
	constructor() {
		// for user story 2
		this.capacity = 10;
		this.planesAtAirport = [];
	}

	planesAtAirport = []; // for user story 1
	planeLand(plane) {
		this.planesAtAirport.push(plane); //this is directing to specific planesAtAirport.
		console.log(`Plane ${plane.id} has landed.`);
	}

	setCapacity(input) {
		this.capacity = input;
		return this.capacity;
	}
}

module.exports = Airport;
