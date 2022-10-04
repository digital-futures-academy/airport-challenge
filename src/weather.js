class Weather {

    constructor(weather) {
        this.weather = weather
    };

    getWeather = weather => {
        weather = Math.floor(Math.random() * 5) + 1
        if (weather === 1) {
            return 'sunny';

        } else if (weather === 2) {
            return 'cloudy';

        } else if (weather === 3) {
            return 'stormy';

        } else if (weather === 4) {
            return 'rain';

        } else {
            return 'mild';
        }
    };
};

export default Weather;