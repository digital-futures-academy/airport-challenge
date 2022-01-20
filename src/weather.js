class WeatherReport {

    constructor() {
        this.date = new Date;
        this.date = this.date.toLocaleString('en-GB', { timeZone: 'UTC' });

        //Set so it is stormy 15% of the time
        this.stormyWeather = Math.random();
        this.stormyWeather <= 0.15 ? this.stormyWeather = true : this.stormyWeather = false;
    }

}

module.exports = { WeatherReport };

