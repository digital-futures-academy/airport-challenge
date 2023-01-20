class Weather {
    constructor() {
        this.weatherStatus = this.generatedWeather();
    }


    //Using RNG to determine a number between 1-100
    //Because Stormy weather is a rare occurrence, we can return "stormy"
    //When the RNG returns 90-100, else for 0 to and equal to 90, it is "sunny"
    //We add 1 to the RNG because otherwise we would only get 0-99.


    generatedWeather() {
        let randomNum = Math.floor(Math.random() * 100) + 1;
        if (randomNum <= 90) {
            return "sunny";
        } else {
            return "stormy";
        }
    }
}

module.exports = Weather;