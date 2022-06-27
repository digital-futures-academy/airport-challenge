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
    if (!this.isAirportFull)
      this.planesAtAirport.push(plane);
    console.log(this.planesAtAirport);
    console.log(`planesAtAirport length: ${this.planesAtAirport.length}`)
    return `Confirming that ${plane} has landed.`;
    //else {
    //  return `Airport is full. ${plane} cannot land.`
    //}
  }

  isAirportFull() {
    return this.planesAtAirport.length >= this.#capacity;
  }
}

module.exports = Airport;
