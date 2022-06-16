//const planes = require('../src/planes');

class Airport {
    planesAtAirport = [];
	capacity = 10;
	
	planeLand(plane) {
		this.planesAtAirport.push(plane); //this is directing to specific planesAtAirport.
		console.log(`Plane ${plane.id} has landed.`);
	}

	setCapacity(input) {
		// used a setter to set a new cap for the airport
		this.capacity = input;
		return this.capacity; // used return because i didn't use a arrow function so i need a return
	}
}

module.exports = Airport;
