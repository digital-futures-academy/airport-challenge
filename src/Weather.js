class Weather {

    weatherGenerator() {
        let weatherNow, randomNum;

        randomNum = Math.floor(Math.random() * (4 - 2 + 1) + 2);

        if (randomNum === 1 || randomNum === 2 || randomNum === 3) {
            weatherNow = `sunny`;
        }
        else {
            weatherNow = `stormy`;
        }

        return weatherNow;
    }
}

module.exports = Weather;