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



}

module.exports = Weather;
