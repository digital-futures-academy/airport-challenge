const Plane = require("./Plane");

class Airport {
  // here's a starting point for you
  constructor(capacity = 10, planesInAirport = []) {
    this.planesInAirport = planesInAirport;

    // if the overridden value is not a number, by default the value is 10;
    if (typeof capacity !== "number") {
      this.capacity = 10;
      // else it will be set to the given number
    } else {
      this.capacity = capacity;
    }
  }

  landPlane = (plane) => {
    if (plane instanceof Plane) this.planesInAirport.push(plane);
  };
}

module.exports = Airport;
