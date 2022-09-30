class Airport {
  // here's a starting point for you
  planesAtAirport = [];
  capacity;
  totalCapacity = 0;

  constructor(capacity) {
    this.capacity = capacity;
  }

  landPlane = (plane) => {
    this.planesAtAirport.push(plane);
  };

  overrideCapacity = (newCap) => {
    if (this.totalCapacity >= 0) {
      return (this.capacity += newCap);
    } else {
      return this.capacity;
    }
  };
}

module.exports = Airport;
