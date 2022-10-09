class Weather {

    isItStormy = () => {
        let stormyWeather = Math.floor(Math.random() * 10)
        if (stormyWeather % 2 === 0) {
            return true;
        }
        return false;
    }


}

module.exports = Weather;





