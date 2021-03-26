class Weather {

  constructor(integer1=1, integer2=2) {
    this.integer1 = integer1;
    this.integer2 = integer2;

  }

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  checkIfStormy(currentweather) {
   if (currentweather === 'stormy') {
      this.integer1 = 2;
      this.integer2 = 2;
    } else if (currentweather === 'sunny') {
      this.integer1 = 1;
      this.integer2 = 1;
    }
    const randomNumber = this.randomInteger(
this.integer1,
this.integer2
)
    if (randomNumber !== 2) {
      return 'sunny'
    } else {
      return 'stormy'
    }
  }
}


module.exports = Weather
