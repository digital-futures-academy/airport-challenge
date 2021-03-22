function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


class Weather {

  constructor(integer1, integer2) {
    //this.integer1 = integer1;
    this.randomNumber = 0;
  }

  static checkIfStormy(integer1=1, integer2=1) {
    this.randomNumber = randomInteger(integer1, integer2)
    if (this.randomNumber % 2 != 0) {
      return "sunny"
    } else {
      return "stormy"
    }
  }


}

module.exports = Weather
