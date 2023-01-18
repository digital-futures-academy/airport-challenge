class Weather {


    getWeather() {
        return Math.random() * 10 >= 2 ? `sunny` : `stormy`;
    }


}

module.exports = Weather;