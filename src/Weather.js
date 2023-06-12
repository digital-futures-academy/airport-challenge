class Weather {
    constructor() {
        let randomNumber = Math.floor(Math.random() * 10);
        // 10% stormy, 90% sunny
        this.weather = randomNumber === 1 ? `stormy` : `sunny`;
    }
}

module.exports = Weather;