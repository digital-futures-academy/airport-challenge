class Weather {
    currentWeather;
    possibleWeather = ['sunny', 'sunny', 'stormy',]

    checkWeather = () => {
        let index = Math.floor(Math.random() * this.possibleWeather.length);
        return this.currentWeather = this.possibleWeather[index]
    }
}

module.exports = Weather