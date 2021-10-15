class Weather {
  static status = 'sunny';
  static checkWeather(weather) {
    this.status = weather;
  }
}

module.exports = Weather;