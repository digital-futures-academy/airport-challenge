class Airport {
  // here's a starting point for you
  constructor() {
    this.planes = [],
    this.capacity = 100
  }

  landPlane(plane) {
    if (this.planes.length < this.capacity) {
      this.planes.push(plane);
    } else {
      console.log('Abort landing! The airport is full!')
    }
    return this.planes
  };

  capacityOverride(num) {
    this.capacity = num
    return this.capacity
  }
}

module.exports = Airport;
