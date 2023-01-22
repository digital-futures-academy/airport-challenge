class Weather {
    constructor() {
        this.weatherStatus = this.generatedWeather();
    }


    generatedWeather() {
        let randomNum = Math.floor(Math.random() * 100) + 1;
        if (randomNum <= 50) {
            return "sunny";
        } else {
            return "stormy";
        }
    }
}

module.exports = Weather;