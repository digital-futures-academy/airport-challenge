const Plane = require('../src/plane');

class Airport {
	capacity;
	planesInAirport = [];
	planeId;
	weather;

	// Initializes the weather and capacity to some default values which can be changed during object creation
	constructor(weather = 'SUNNY', capacity = 10) {
		this.weather = weather;
		this.capacity = capacity;
	}

	//Land plane if the weather is not stormy, airport is not full and the plane does not exist at the airport
	landPlane(plane) {
		if (this.weather === 'STORMY' || this.isAirportFull() || this.getPlanesInAirport().includes(plane.planeId)) {
			return false;
		}
		this.planesInAirport.push(plane.planeId);
		return true;
	}

	// Returns the array of planes (planeID's) that are currently in the airport
	getPlanesInAirport() {
		return this.planesInAirport;
	}

	// Checks if the number of planes at the airport exceeds the capacity of the airport
	isAirportFull() {
		return ((this.getPlanesInAirport().length < this.capacity) ? false : true);
	}

	// Returns the current capacity of the airport
	getCapacity() {
		return this.capacity;
	}

	// Take off the plane if the weather is not stormy and the plane is present at the airport (in array of planes)
	takeOffPlane(plane) {
		if (this.weather !== 'STORMY' && this.getPlanesInAirport().includes(plane.planeId)) {
			let position = this.getPlanesInAirport().indexOf(plane.planeId);
			this.getPlanesInAirport().splice(position, 1); // Removes the plane that has took off, from the array of planes at the airport
			return true;
		}
		return false;
	}
}

module.exports = Airport;
