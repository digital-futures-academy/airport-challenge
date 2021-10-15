class Airport {
  constructor(airplanes = []) {
    this.currentPlanes = airplanes
  }
  landPlane(plane) {
    plane.status = 'landed';
  }
}

module.exports = Airport;
