const Plane = require("./Plane");

class Airport {
  // here's a starting point for you
  planesInAirport = [];

  constructor(capacity = 3) {
    // if the overridden value is not a number, by default the value is 10;
    if (typeof capacity !== "number") {
      this.capacity = 3;
      // else it will be set to the given number
    } else {
      this.capacity = capacity;
    }
  }

  landPlane = (plane) => {
    if (this.isAirportFull() === false && plane instanceof Plane)
      this.planesInAirport.push(plane);
    return;
  };

  isAirportFull = () => {
    return this.planesInAirport.length >= this.capacity;
  };

  setCapacity(newCapacity) {
    if (typeof newCapacity !== "number") return this.capacity;
    this.capacity = newCapacity;
  }
}

module.exports = Airport;
