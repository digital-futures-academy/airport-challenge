class Weather {

    currentWeather;
    weatherRandomiser;

    constructor(currentWeather) {
        this.currentWeather = "Sunny";
    }

    setWeather(string) {
        this.currentWeather = string; 
    }

    generateWeather() {
        this.weatherRandomiser = Math.floor(Math.random() * 10)
        if (this.weatherRandomiser <= 3) {
            this.currentWeather = 'Stormy';
        } else {
            this.currentWeather = 'Sunny';
        }
        
    }
}

module.exports = Weather;