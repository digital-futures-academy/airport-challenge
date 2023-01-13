class Airport {
  
	constructor() {
		this.planes = []
	}

	land(plane) {
		this.planes.push(plane);
	}

}

module.exports = Airport;
