export default class Plane {

	#flightNum;

	/**
	 * The constructor function takes a string as an argument and assigns it to the private property
	 * #flightNum.
	 * @param num - The flight number.
	 */
	constructor(num) {
		if (typeof num !== 'string') return new Error('Invalid flight number passed as argument.');
		this.#flightNum = num;
	}

	/**
	 * It returns the value of the private variable #flightNum.
	 * @returns The flight number.
	 */
	get flightNum() {
		return this.#flightNum;
	}

}