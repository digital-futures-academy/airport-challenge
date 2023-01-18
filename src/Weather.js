class Weather {
    stormy = false;

    isItStormy = () => {
        if (Math.random() > 0.9)
            this.stormy = true;
        else this.stormy = false;
        return this.stormy;
    }
}

module.exports = Weather;