class Airport {
  constructor(airplanes = []) {
    this.currentPlanes = airplanes
  }
  landPlane(plane) {
    plane.status = 'landed';
    this.currentPlanes.push(plane);
  }
}

module.exports = Airport;
