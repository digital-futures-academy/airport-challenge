class Airport {
  // here's a starting point for you
  constructor() {
    this.planes = [],
    this.capacity = 100
  }

  landPlane(plane) {
    this.planes.push(plane);
    return this.planes
  }

  capacityOverride(num) {
    this.capacity = num
    return this.capacity
  }
}

module.exports = Airport;
