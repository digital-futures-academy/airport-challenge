// Separate from airport.js as a random variable, not controlled by the airport.

class Weather {
  isClear() {

    let storm = 0;

    let weather = (Math.floor((Math.random() * 10) + 1));
    if (weather > 7) {
      storm = 1;
    }
    return storm;

  }

}

module.exports = Weather;