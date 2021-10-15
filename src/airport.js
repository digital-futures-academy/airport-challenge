class Airport {
  // here's a starting point for you
  constructor(maxCapacity = 500) {
    this.maxCapacity = maxCapacity
    this.planes = [];
  }

  landPlane(plane) {
    this.planes.push(plane);
  }

  overrideCapacity(newCapacity) {
    this.maxCapacity = newCapacity;
  }
}

module.exports = Airport;
