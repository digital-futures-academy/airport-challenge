class Airport {
  // here's a starting point for you
  constructor() {
    this.planes = []
  }

  landPlane(plane) {
    this.planes.push(plane);
    return this.planes
  }
}

module.exports = Airport;
