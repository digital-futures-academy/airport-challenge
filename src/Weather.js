class Weather {
  static status = 'sunny';
  static setStatus() {
    let randomNum = Math.random();
    if (randomNum > 0.7) {
      this.status = 'stormy';
      return this.status;
    }
    else {
      this.status = 'sunny';
      return this.status;
    }
  }
}

module.exports = Weather;