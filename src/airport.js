class Airport {
  constructor(airplanes = [], capacity = 10) {
    this.currentPlanes = airplanes
    this.capacity = capacity
  }
  landPlane(plane) {
    plane.status = 'landed';
    this.currentPlanes.push(plane);
  }
}

module.exports = Airport;
