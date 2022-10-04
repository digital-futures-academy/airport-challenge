class Airport {
  constructor(planesAtAirport = [], capacity = 5) {
    this.planesAtAirport = planesAtAirport;
    this.capacity = capacity;
  }

  landPlane(plane) {
    this.planesAtAirport.push(plane);
    return this.planesAtAirport;
  }

  setCapacity(newCapacity) {
    return this.capacity = newCapacity;
  }

}


module.exports = Airport;
