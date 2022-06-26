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
    this.#capacity = newCapacity
  }

  landPlane(plane) {
    this.planesAtAirport.push(plane);
    console.log(this.planesAtAirport);
    console.log(`planesAtAirport length: ${this.planesAtAirport.length}`)
    return `Confirming that ${plane} has landed.`;
  }

  isAirportFull() {
    return this.planesAtAirport.length >= this.#capacity;
  }
}

module.exports = Airport;
