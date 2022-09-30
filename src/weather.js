class Weather {
    weather = "";

    setWeather = () => {
        if (Math.random() >= 0.1) {
            this.weather = "sunny";
        } else {
            this.weather = "stormy";
        }
    }

    getWeather = () => {
        return this.weather;
    }
}

module.exports = {
    Weather
};