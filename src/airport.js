class Airport {
  constructor(airplanes = [], capacity = 10) {
    this.currentPlanes = airplanes;
    this.capacity = capacity;
  }
  landPlane(plane) {
    plane.status = 'landed';
    this.currentPlanes.push(plane);
  }
  checkIfFull() {
    if (this.currentPlanes.length === this.capacity) {
      return true;
    }
    else {
      return false;
    }
  }
}

module.exports = Airport;
