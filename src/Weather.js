class Weather {

    #currentWeather
    #validWeatherConditions;
    constructor() {
        this.#currentWeather = undefined;
        this.#validWeatherConditions = ['sunny', 'rainy', 'stormy', 'windy', 'volcanic', undefined];
        Object.freeze(this.#validWeatherConditions); //hopefully | should probably test this
    };



    getWeather() {
        return this.#currentWeather;
    };

    setCurrentWeather(weather) {
        if (this.#validWeatherConditions.indexOf(weather) !== -1) {
            this.#currentWeather = weather;
        }
    };
};

module.exports = Weather;