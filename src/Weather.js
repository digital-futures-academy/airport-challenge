class Weather {
  // defaultWeather will be Sunny when instantiated.
  constructor(givenWeather = `Sunny`) {
    this.defaultWeather = givenWeather;
  }
  // generate random number between 1 and 2.
  getRandomNumber = () => {
    return Math.floor(Math.random() * 2) + 1;
  };

  // Assign defaultWeather based on the randomly generated number.
  // 1 = Sunny, 2 = Stormy
  getRandomWeather = () => {
    let randomNumber = this.getRandomNumber();
    return randomNumber == 1
      ? (this.defaultWeather = `Sunny`)
      : (this.defaultWeather = `Stormy`);
  };
}

module.exports = Weather;
