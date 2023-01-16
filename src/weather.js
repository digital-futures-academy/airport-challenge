class Weather {
    isStormy = () => {
        return Math.random()< 0.1;
    }
}

module.exports = Weather;