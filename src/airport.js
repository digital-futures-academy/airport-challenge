class Airport {
  // here's a starting point for you
  planesAtAirport = [];
  #capacity

  constructor(capacity = 5) {
    this.#capacity = capacity;
  }

  getCapacity() {
    return this.#capacity;
  }

  landPlane(plane) {
    this.planesAtAirport.push(plane);
    console.log(this.planesAtAirport);
    console.log(`planesAtAirport length: ${this.planesAtAirport.length}`)
    return `Confirming that ${plane} has landed.`;
  }
}

module.exports = Airport;
