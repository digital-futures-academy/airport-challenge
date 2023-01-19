class Weather {

    weatherList = ['sunny', 'snowy', 'stormy', 'rainy'];

    checkWeather = () => {
        return this.weatherList[Math.floor((Math.random() * 4))];
    };

    // weather;

    // checkWeather = (weather) => {
    //     return this.weather = weather;
    // }
}

module.exports = Weather;