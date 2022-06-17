const plane = require('../src/planes');
class Airport {
    
	planesAtAirport = [];
	id = [];
	capacity = 15;
	full;
	planeLand(plane) {
		if (this.planesAtAirport.length < this.capacity ) {
			this.planesAtAirport.push(plane);
			//this is directing to specific planesAtAirport.
		console.log(`Plane ✈️  ${plane.id} has permission to land.`);
		}
		
		else {
			//this is directing to specific planesAtAirport.
			console.log(`Plane ✈️  ${plane.id} can't land.`);
			this.full = true;
		}
	}
	
	isFull() {
		return this.full;
	}

	Capacity(input) {
		// used a setter to set a new cap for the airport
		this.capacity = input;
		return this.capacity; // used return because i didn't use a arrow function so i need a return
	}
}

module.exports = Airport;
