const Plane = require('./plane.js');

class Airport {

	DEF_CAPACITY = 10;

	constructor(airportCapacity = this.DEF_CAPACITY) {
		this.planes = [];
		this.airportCapacity = airportCapacity;
	}

	getCapacity() {
		return this.airportCapacity;
	}

	changeCapacity(size) {
		if (typeof size !== 'number' || size < 0) return new Error('Invalid new capacity passed as argument.')
		this.airportCapacity = size;
	}
	
	takeoff(plane) {
		if (plane instanceof Plane === false) return new Error('Invalid plane passed as argument');
		this.planes.splice(this.planes.indexOf(plane), 1);
	}

	land(plane) {
		if (plane instanceof Plane === false) return new Error('Invalid plane passed as argument.');
		this.planes.push(plane);
	}

	

}

module.exports = Airport;
