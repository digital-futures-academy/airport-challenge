const Plane = require("./Plane");

class Airport {
  // capacity = 5;
  // planesInAirport = [];
  // here's a starting point for you

  constructor(capacity = 5, planesInAirport = []) {
    this.planesInAirport = planesInAirport;

    // if the overridden value is not a number, by default the value is 10;
    if (typeof capacity !== "number") {
      this.capacity = 5;
      // else it will be set to the given number
    } else {
      this.capacity = capacity;
    }
  }

  landPlane = (plane) => {
    if (plane instanceof Plane) this.planesInAirport.push(plane);
  };

  isAirportFull = () => {
    return this.planesInAirport >= this.capacity;
  };

  setCapacity(newCapacity) {
    if (typeof newCapacity !== "number") return this.capacity;
    this.capacity = newCapacity;
  }
}

module.exports = Airport;
