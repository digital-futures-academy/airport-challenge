const Plane = require('./plane.js');

class Airport {

	DEF_CAPACITY = 10;

	constructor(airportCapacity = this.DEF_CAPACITY) {
		this.planes = [];
		this.airportCapacity = airportCapacity;
	}

	land(plane) {
		if (plane instanceof Plane === false) return new Error('Invalid plane passed as argument.');
		this.planes.push(plane);
	}

	changeCapacity(size) {
		if (typeof size !== 'number' || size < 0) return new Error('Invalid new capacity passed as argument.')
		this.airportCapacity = size;
	}

}

module.exports = Airport;
