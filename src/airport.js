class Airport {
  // here's a starting point for you
  constructor(initialPlanes = []) {
    this.planes = initialPlanes;
  }

  landPlane(newPlane) {
    this.planes.push(newPlane);
    //console.log(this.planes);
    return this.planes;
  }

}

module.exports = Airport;
