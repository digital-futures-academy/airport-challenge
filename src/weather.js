// Weather Class

class Weather { 

    // properties of weather
    #weatherOn = true; // default true

    weatherOn() {
        return this.#weatherOn;
    }

    getWeather() {
        return Math.floor((Math.random() * 50) + 1);
    }
}

module.exports = Weather;
