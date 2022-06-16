class Airport {
	constructor() {
		// for user story 2
		this.capacity = 10; //default capacity
		this.planesAtAirport = [];
	}

	planesAtAirport = []; // for user story 1
	planeLand(plane) {
		this.planesAtAirport.push(plane); //this is directing to specific planesAtAirport.
		console.log(`Plane ${plane.id} has landed.`);
	}

	setCapacity(input) {
		// used a setter to set a new cap for the airport
		this.capacity = input;
		return this.capacity; // used return because i didn't use a arrow function so i need a return
	}

	/*isFull() {
		if (this.setCapacity(input) = this.capacity) {
			return new error(`Abort landing, this airport is FULL`);
		}
	}*/
}

module.exports = Airport;
