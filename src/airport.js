class Airport {
  constructor(defaultCapacity = 2) {
    this.planes = [];
    this.defaultCapacity = defaultCapacity;
  }

  landPlane(newPlane) {
    this.planes.push(newPlane);
  }

  isFull() {
    if (this.planes.length >= this.defaultCapacity) {
      return true;
    }
  }

  takeoffPlane(newPlane) {
    this.planes.pop(newPlane);
  }

  isPlaneAtAirport(newPlane) {
    if (this.planes.includes(newPlane)) {
      return true;
    }
    else {
      return false;
    }
  }
}
module.exports = Airport;
