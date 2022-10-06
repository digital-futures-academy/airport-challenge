class Airport {

  capacity;
  planesAtAirport;

  constructor(newCapacity = 0) {
    this.planesAtAirport = [];
    this.capacity = newCapacity;
  }

  landPlane = plane => {
    this.planesAtAirport.push(plane);
  }

  getCapacity() {
    return this.capacity;
  }

}

module.exports = Airport;
