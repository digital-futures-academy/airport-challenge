class Airport {
  // here's a starting point for you

  planesAtAirport = [];
  #capacity

  constructor(capacity = 1) {
    this.#capacity = capacity;
  }

  getCapacity() {
    return this.#capacity;
  }

  setCapacity(newCapacity) {
    this.#capacity = newCapacity;
  }

  isAirportFull() {
    return this.planesAtAirport.length >= this.#capacity;

  }

  //trying to create more than one plane somehow 

  landPlane(plane) {
    if (this.isAirportFull() === false) {
      this.planesAtAirport.push(plane);
      return `confirming that ${plane} has landed`;
    }
    return `confirming that ${plane} has not landed`

  }

}

module.exports = Airport;
