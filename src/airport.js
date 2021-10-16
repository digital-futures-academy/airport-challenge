class Airport {
  // here's a starting point for you
  constructor() {
    this.planes = [];
    this.capacity = 2;
  }

  landPlane(newPlane) {
    // console.log(this.capacity, 'Default size')
    if (this.planes < this.capacity) {
      this.planes.push(newPlane);
      return this.planes;
    }
    else {
      return `Airport is Full no landing`;
    }

  }
}

module.exports = Airport;
