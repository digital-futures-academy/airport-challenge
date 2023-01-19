export default class Weather {

	#status = Math.random() > 0.3 ? 'Sunny' : 'Stormy';

	getWeather() {
		return this.#status;
	}

	setStatus(status) {
		this.#status = status;
	}

}