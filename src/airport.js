class Airport {
  constructor(capacity = 0) {
    this.planesAtAirport = [];
    this.capacity = capacity;
  }

  landPlane(plane) {
    if (this.isFull()) {
      return "Sorry, airport is full"
    } else {
      this.planesAtAirport.push(plane)
      return this.planesAtAirport;
    }
  }

  setCapacity(newCapacity) {
    return this.capacity = newCapacity;
  }

  isFull() {
    return this.planesAtAirport.length >= this.capacity;
  }

}


module.exports = Airport;
