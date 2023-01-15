const Plane = require('./plane.js');
const Weather = require('./weather.js');

class Airport {

	DEF_CAPACITY = 10;

	constructor(airportCapacity = this.DEF_CAPACITY) {
		this.planes = [];
		this.airportCapacity = airportCapacity;
		this.weather = new Weather();
	}

	getCapacity() {
		return this.airportCapacity;
	}

	changeCapacity(size) {
		if (typeof size !== 'number' || size < 0) return new Error('Invalid new capacity passed as argument.');
		this.airportCapacity = size;
	}
	
	isAtAirport(plane) {
		return this.planes.includes(plane);
	}

	takeOff(plane) {
		if (plane instanceof Plane == false || this.isAtAirport(plane) == false) return new Error('Invalid plane passed as argument.');
		if (this.weather.getWeather() == 'Stormy') return new Error('Due to current poor weather conditions the plane is not be able to take off.');
		this.planes.splice(this.planes.indexOf(plane), 1);
	}

	land(plane) {
		if (plane instanceof Plane == false) return new Error('Invalid plane passed as argument.');
		if (this.isAtAirport(plane) == true || this.isFull() == true) return new Error('The plane is already at the airport / Airport full.');
		if (this.weather.getWeather() == 'Stormy') return new Error('Due to current poor weather conditions the plane is not be able to land.');
		this.planes.push(plane);
	}

	isFull() {
		return this.planes.length == this.getCapacity();
	}

}

module.exports = Airport;
