const airport = require('../src/airport');

class plane {
	constructor(planeId) {
		this.planeId = planeId;
	}

	isLanded() {
		if (this.state === 'landed') {
			return true;
		} else {
			return false;
		}
	}

	isAtTheAirport(airport) {
		if (airport.planesAtAirport().includes(this.planeId)) {
			return true;
		}
	}
}

module.exports = plane;
