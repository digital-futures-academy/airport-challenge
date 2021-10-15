class Airport {
  // here's a starting point for you
  constructor(maxCapacity = 500) {
    this.maxCapacity = maxCapacity;
    this.planes = [];
  }
  landPlane(plane) {
    this.planes.push(plane);
  }
}

module.exports = Airport;
