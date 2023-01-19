// Weather Class

class Weather { 

    getWeather() {
        return Math.floor((Math.random() * 50) + 1);
    }
}

module.exports = Weather;
