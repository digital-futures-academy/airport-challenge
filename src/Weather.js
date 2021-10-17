
class Weather{

  weatherReport;

  constructor(weatherReport = 'sunny') {

    this.weatherReport = weatherReport;

  }

  generateWeather() {

    let randomNum = Math.random();

    if (randomNum > 0.8) {

      this.weatherReport = 'stormy';

    } else {

      this.weatherReport = 'sunny';

    }
  }

}

module.exports = Weather;
