class Weather {

    #weatherCondition;

    constructor(weatherCondition) {
        this.#weatherCondition = weatherCondition;
    }

    getWeather() {
        return this.#weatherCondition;
    }

    setWeather(newWeather) {
        this.#weatherCondition = newWeather;
    }

    isWeatherStormy() {
        return this.#weatherCondition === 'stormy'
    }

}

module.exports = Weather;
