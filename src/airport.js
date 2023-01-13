const Plane = require('./plane.js');

class Airport {
  
	constructor() {
		this.planes = [];
	}

	land(plane) {
		if (plane instanceof Plane === false) {
			return new Error('Invalid plane passed as argument.');}
		this.planes.push(plane);
	}

}

module.exports = Airport;
