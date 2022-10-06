class Weather {

    constructor(weather) {
        this.weather = weather
    }

    weatherGenerator() {
        if (Math.random() >= 0.5) {
            return this.weather = "sunny";
        } else {
            return this.weather = "stormy";
        }
    }

    weatherReport() {
        return this.weather
    }
}

module.exports = Weather;