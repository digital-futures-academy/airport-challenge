class Weather {

    weatherStatus = undefined;

    weatherReport() {
        let weather = Math.random();

        if (weather < 0.3) {
            this.weatherStatus = "stormy";
        } else {
            this.weatherStatus = "sunny";
        }

    }

}

module.exports = Weather;