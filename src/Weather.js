class Weather {
  #defaultWeather = `Sunny`;
  getRandomNumber = () => {
    return Math.floor(Math.random() * 2) + 1;
  };
  getWeather() {
    // let randomNumber = this.getRandomNumber();
    // if (randomNumber == 1) {
    return this.#defaultWeather;
    // }
    // return randomNumber == 1
    //   ? (this.defaultWeather = `Sunny`)
    //   : (this.defaultWeather = `Stormy`);
  }
}

module.exports = Weather;
