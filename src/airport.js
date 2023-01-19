export default class Airport {

	#DEF_CAPACITY = 10;
	#planes = [];
	#airportCapacity;
	#weather;
	
	/**
	 * The constructor function is a special function that is called when an object is created from a
	 * class
	 * @param weather - This is the weather object that we will be using to check the weather.
	 * @param [airportCapacity] - The capacity of the airport.
	 */
	constructor(weather, airportCapacity = this.#DEF_CAPACITY) {
		this.#airportCapacity = airportCapacity;
		this.#weather = weather;
	}

	/**
	 * The function returns the value of the private variable airportCapacity
	 * @returns The airportCapacity property is being returned.
	 */
	get airportCapacity() {
		return this.#airportCapacity;
	}

	/**
	 * It returns the value of the private variable #planes.
	 * @returns The planes property is being returned.
	 */
	get planes() {
		return this.#planes;
	}

	/**
	 * The function takes a string as an argument and sets the value of the weather property to the value
	 * of the argument
	 * @param status - The weather status.
	 */
	set weather(status) {
		this.#weather = status;
	}

	/**
	 * The function takes a number as an argument and sets the airport capacity to that number
	 * @param size - The new capacity of the airport.
	 */
	changeCapacity(size) {
		if (isNaN(size) || size < 0) return new Error('Invalid new capacity passed as argument.');
		this.#airportCapacity = size;
	}
	
	/**
	 * If the plane is in the array of planes, return true, otherwise return false.
	 * @param plane - The plane we want to check is at the airport.
	 * @returns True / False.
	 */
	isAtAirport(plane) {
		return this.#planes.includes(plane);
	}

	/**
	 * If the plane is not an instance of the Plane class, or if the plane is not at the airport, return
	 * an error. If the weather is stormy, return an error. Otherwise, remove the plane from the airport
	 * @param plane - The plane that is taking off.
	 * @param planeIsInstanceOf - a boolean value that is true if the plane is an instance of the Plane
	 * class.
	 * @returns An error message.
	 */
	takeOff(plane, planeIsInstanceOf) {
		if (planeIsInstanceOf === false || this.isAtAirport(plane) == false) return new Error('Invalid plane passed as argument.');
		if (this.#weather.getWeather() == 'Stormy') return new Error('Due to current poor weather conditions the plane is not be able to take off.');
		this.#planes.splice(this.#planes.indexOf(plane), 1);
	}

	/**
	 * If the plane is already at the airport or the airport is full, return an error. If the weather is
	 * stormy, return an error. Otherwise, add the plane to the airport
	 * @param plane - The plane that is landing.
	 * @param planeIsInstanceOf - This is a boolean value that is passed in from the plane class. It is
	 * used to check if the plane is an instance of the plane class.
	 * @returns an error if the plane is already at the airport or the airport is full.
	 */
	land(plane, planeIsInstanceOf) {
		if (planeIsInstanceOf === false) return new Error('Invalid plane passed as argument.');
		if (this.isAtAirport(plane) == true || this.isFull() == true) return new Error('The plane is already at the airport / Airport full.');
		if (this.#weather.getWeather() == 'Stormy') return new Error('Due to current poor weather conditions the plane is not be able to land.');
		this.#planes.push(plane);
	}

	/**
	 * The function isFull() returns true if the number of planes in the airport is equal to the airport
	 * capacity
	 * @returns The length of the planes array is being compared to the airportCapacity.
	 */
	isFull() {
		return this.#planes.length >= this.airportCapacity;
	}

}