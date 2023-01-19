export default class Plane {

	#flightNum;

	constructor(num) {
		if (typeof num !== 'string') return new Error('Invalid flight number passed as argument.');
		this.#flightNum = num;
	}

	get flightNum() {
		return this.#flightNum;
	}

}