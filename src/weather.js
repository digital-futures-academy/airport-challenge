class Weather {

    // Uses a random generator to set the weather. The weather is normally set to be 'SUNNY' (70% of times) and occasionally 'STORMY' (30% of times)
    static getWeather() {
        let weather = Math.floor(Math.random() * 10);
        if (weather >= 0 && weather <= 6) {
            return 'SUNNY';
        }
        return 'STORMY';
    }
}

module.exports = Weather;