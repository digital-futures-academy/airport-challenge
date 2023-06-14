const weather = {

    currentWeather: "Sunny",

    setWeather: function () {
        generator = Math.floor(Math.random() * 10)
        console.log(generator)
        if (generator <= 3) {
            this.currentWeather = "Stormy";
        } else {
            this.currentWeather = "Sunny";
        } return this.currentWeather;

    }
}


module.exports = {
    weather,
}