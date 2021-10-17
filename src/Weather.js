class Weather {

    constructor(weather) {
        this.weather = weather;
    }

    getWeatherReport() {
        let weatherReport = Math.floor((Math.random()*40)+1);
        return weatherReport;
    }

    getWeatherStatus() {
        if(this.weather > 0 && this.weather <= 20) {
            return 'Stormy';
        } else {
            return 'Sunny';
        }
    }
}

module.exports = Weather;