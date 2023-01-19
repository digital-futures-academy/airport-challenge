const { checkWeather } = require(`../src/weather.js`);

class Airport {
  // here's a starting point for you
  constructor(capacity = 1) {
    this.capacity = capacity;
  }

  planesLanded = [];

  isFull() {
    if (this.planesLanded.length === this.capacity) {
      return true;
    } else {
      return false;
    }
  }

  land(plane, currentWeather) {
    if (
      this.isFull() ||
      plane.status !== "flying" ||
      currentWeather === "stormy"
    ) {
      return false;
    } else {
      this.planesLanded.push(plane);
      plane.status = "landed";
      return true;
    }
  }

  takeOff(plane, currentWeather) {
    if (!this.planesLanded.includes(plane) || currentWeather === "stormy") {
      return false;
    } else {
      this.planesLanded.splice(this.planesLanded.indexOf(plane), 1);
      plane.status = "flying";
      console.log(
        "Airport informs: The plane took off successfully and it is no longer in the airport."
      );
      return true;
    }
  }
}

module.exports = Airport;
