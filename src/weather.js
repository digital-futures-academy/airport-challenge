export default class Weather {

	#status = Math.random() > 0.3 ? 'Sunny' : 'Stormy';

	/**
	 * The function returns the value of the private variable #status.
	 * @returns The weather status.
	 */
	getWeather() {
		return this.#status;
	}

	/**
	 * The function sets the status of the weather to the value of the parameter
	 * @param status - The status of the weather.
	 */
	setStatus(status) {
		this.#status = status;
	}

}