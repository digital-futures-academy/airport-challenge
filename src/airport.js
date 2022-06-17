class Airport {
	constructor() {
		// for user story 2
		this.capacity = 10;
		this.planesAtAirport = [];
	}

	planesAtAirport = [];
	planeLand(plane) {
		//this.planesAtAirport.push(plane); //this is directing to specific planesAtAirport.
		//console.log(`Plane ${plane.id} has landed.`); *** used if for better result ***
		if (this.capacity > this.planesAtAirport.length) {
			this.planesAtAirport.push(plane);
		}
		return new Error(`Abort landing, Airport is at full capacity!`);
	}

	setCapacity(input) {
		// used a setter to set a new cap for the airport
		this.capacity = input;
		return this.capacity;
	}
}

module.exports = Airport;
