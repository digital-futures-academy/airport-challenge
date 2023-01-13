const Plane = require("./Plane");

class Airport {
  // here's a starting point for you
  constructor(planesInAirport = [], capacity = 10) {
    this.planesInAirport = planesInAirport;
    this.capacity = capacity;
  }

  landPlane = (plane) => {
    if (plane instanceof Plane) this.planesInAirport.push(plane);
  };
}

module.exports = Airport;
