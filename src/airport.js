const Plane = require(`../src/Plane`);
class Airport {
  // here's a starting point for you
  airportPlanes = [];

  constructor(capacity) {
    this.capacity = capacity;
  }

  landPlane = (plane) => {
    if (plane instanceof Plane) this.airportPlanes.push(plane);
  };

  fullCapacity = (full) => {
    this.capacity += full;
  };

  raisingCapacity = (newCapacity) => {
    this.capacity = newCapacity;
  };
}

module.exports = Airport;
