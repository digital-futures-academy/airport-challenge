class Weather {

	constructor() {
		this.status = Math.random() > 0.3 ? 'Sunny' : 'Stormy';
	}

	getWeather() {
		return this.status;
	}

}

module.exports = Weather;