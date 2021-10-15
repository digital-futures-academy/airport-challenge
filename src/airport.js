class Airport {
  // here's a starting point for you
  constructor(initialPlanes = []) {
    this.planes = initialPlanes;
  }

  landPlane(newPlane) {
    this.planes.push(newPlane);
  }

}

module.exports = Airport;
