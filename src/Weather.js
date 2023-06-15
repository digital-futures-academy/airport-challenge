class Weather {
    constructor() {
        let randomNumber = Math.floor(Math.random() * 10 + 1);
        // 10% stormy, 90% sunny
        this.description = randomNumber === 1 ? `Stormy` : `Sunny`;
    }
}

module.exports = Weather;