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

  setCapacity(newCapacity) {
    this.capacity = newCapacity;
  }

}

module.exports = Airport;
