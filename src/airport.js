const Plane = require(`../src/Plane`);
class Airport {
  // here's a starting point for you
  airportPlanes = [];

  constructor(capacity) {
    this.planes = [];
    this.capacity = capacity;
  }

  landPlane = (plane) => {
    if (plane instanceof Plane) this.airportPlanes.push(plane);
  };

  checkCapacity() {
    return this.planes.length === this.capacity;
  }
}

module.exports = Airport;
