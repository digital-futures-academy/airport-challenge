export default class Airport {

	#DEF_CAPACITY = 10;
	#planes = [];
	#airportCapacity;
	#weather;
	
	constructor(weather, airportCapacity = this.#DEF_CAPACITY) {
		this.#airportCapacity = airportCapacity;
		this.#weather = weather;
	}

	get airportCapacity() {
		return this.#airportCapacity;
	}

	get planes() {
		return this.#planes;
	}

	set weather(status) {
		this.#weather = status;
	}

	changeCapacity(size) {
		if (isNaN(size) || size < 0) return new Error('Invalid new capacity passed as argument.');
		this.#airportCapacity = size;
	}
	
	isAtAirport(plane) {
		return this.#planes.includes(plane);
	}

	takeOff(plane, planeIsInstanceOf) {
		if (planeIsInstanceOf === false || this.isAtAirport(plane) == false) return new Error('Invalid plane passed as argument.');
		if (this.#weather.getWeather() == 'Stormy') return new Error('Due to current poor weather conditions the plane is not be able to take off.');
		this.#planes.splice(this.#planes.indexOf(plane), 1);
	}

	land(plane, planeIsInstanceOf) {
		if (planeIsInstanceOf === false) return new Error('Invalid plane passed as argument.');
		if (this.isAtAirport(plane) == true || this.isFull() == true) return new Error('The plane is already at the airport / Airport full.');
		if (this.#weather.getWeather() == 'Stormy') return new Error('Due to current poor weather conditions the plane is not be able to land.');
		this.#planes.push(plane);
	}

	isFull() {
		return this.#planes.length == this.airportCapacity;
	}

}