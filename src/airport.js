class Airport {
  constructor(defaultCapacity = 2) {
    this.planes = [];
    this.defaultCapacity = defaultCapacity;
  }

  landPlane(newPlane) {
    this.planes.push(newPlane);
  }
}
module.exports = Airport;
