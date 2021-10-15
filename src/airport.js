class Airport {
  constructor(airplanes = [], capacity = 10) {
    this.currentPlanes = airplanes;
    this.capacity = capacity;
  }
  landPlane(plane) {
    if (this.checkIfFull() === false && this.currentPlanes.includes(plane) === false && plane.status === 'flying') {
      plane.status = 'landed';
      this.currentPlanes.push(plane);
    }
    else if (this.checkIfFull() === true) {
      console.log(`Airport reached maximum capacity at ${this.capacity} planes `)
    }
    else if (this.currentPlanes.includes(plane) === true) {
      console.log(`Plane is already at ${this.constructor.name}`);
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
