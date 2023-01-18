class Weather {
  constructor(givenWeather = `Sunny`) {
    this.defaultWeather = givenWeather;
  }
  getRandomNumber = () => {
    return Math.floor(Math.random() * 2) + 1;
  };

  getWeather = () => {
    let randomNumber = this.getRandomNumber();
    return randomNumber == 1
      ? (this.defaultWeather = `Sunny`)
      : (this.defaultWeather = `Stormy`);
  };
}

module.exports = Weather;
