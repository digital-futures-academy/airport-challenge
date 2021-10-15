class Airport {
  constructor(airplanes = [], capacity = 10) {
    this.currentPlanes = airplanes;
    this.capacity = capacity;
  }
  landPlane(plane) {
    if (this.checkIfFull() === false) {
      plane.status = 'landed';
      this.currentPlanes.push(plane);
    }
    else {
      console.log(`Airport reached maximum capacity at ${this.capacity} planes `)
    }
  }
  checkIfFull() {
    if (this.currentPlanes.length === this.capacity) {
      return true;
    }
    else {
      return false;
    }
  }
  setFlying(plane) {
    this.currentPlanes = this.currentPlanes.filter(planes => planes !== plane)
    plane.status = 'flying';
  };
}

module.exports = Airport;
