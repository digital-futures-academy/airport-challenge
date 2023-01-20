class Weather {

    weather = "";
    
    getWeather() {
        this.weather = Math.floor(Math.random() * 2 ) + 1;
        if (this.weather === 1) {
            return "Stormy"
        } else {
            return "Calm"
        }
    }



}

module.exports = Weather;