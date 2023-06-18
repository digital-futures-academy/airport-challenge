class Weather {

    currentWeather

    constructor(currentWeather) {
        this.currentWeather = "Sunny";
    }

    setWeather(string) {
        this.currentWeather = string; 
    }
}

module.exports = Weather;