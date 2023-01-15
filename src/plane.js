class Plane {

	constructor(num) {
		if (typeof num !== 'string') return new Error('Invalid flight number passed as argument.');
		this.flightNum = num;
	}

	getFlightNum() {
		return this.flightNum;
	}

}

module.exports = Plane;