class Weather {

    weather = ""

    isStormy() {
        if (Math.floor((Math.random() * 100))) {
            this.weather = "stormy";
        } else {
            this.weather = "sunny";
        }
        return this.weather;
    }

} module.exports = Weather;