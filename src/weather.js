class Weather {

    weather = "";
    
    checkWeather() {
        if (Math.random() >= 2) {
            this.weather = "Stormy"
        } else {
            this.weather = "Calm"
        }
    }

    getWeather() {
        return this.weather 
    }


}

module.exports = Weather;