const Plane = require('./plane.js');

class Airport {

	DEF_CAPACITY = 10;

	constructor(airportCapacity = this.DEF_CAPACITY) {
		this.planes = [];
		this.airportCapacity = airportCapacity;
	}

	land(plane) {
		if (plane instanceof Plane === false) {
			return new Error('Invalid plane passed as argument.');}
		this.planes.push(plane);
	}

	increaseCapacity(size) {
		this.airportCapacity = size;
	}

}

module.exports = Airport;
