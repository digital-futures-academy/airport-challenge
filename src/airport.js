class Airport {
	constructor() {
		this.capacity = 10;
		this.planesAtAirport = [];
	}

	takeOff = false;

	planeLand(plane) {
		if (this.capacity > this.planesAtAirport.length) {
			this.planesAtAirport.push(plane);
			console.log();
		}
		return new Error(`Abort landing, Airport is at full capacity!`);
	}

	setCapacity(input) {
		this.capacity = input;
		return this.capacity;
	}

	planeTakeOff(plane) {
		this.planesAtAirport.pop(plane);
		return (this.takeOff = true);
	}
}

module.exports = Airport;
