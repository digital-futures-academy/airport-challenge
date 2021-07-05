class Weather {
    constructor() {
        this.randomNumber = Math.random();
    }
    checkIfStormy() {
        // console.log(randomNumber);
        if (this.randomNumber >= 0.2) {
            return false;
        } else {
            return true;
        }
    }
}

// let weather = new Weather();
// weather = weather.checkIfStormy();
// console.log(weather);

module.exports = Weather;
