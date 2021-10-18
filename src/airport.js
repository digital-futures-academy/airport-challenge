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
}
module.exports = Airport;
