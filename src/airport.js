class Airport {
  #capacity;
  #inAirport = [];

  constructor(capacity = 5) {
    this.#capacity = capacity;
  }


  addToInAirport(plane) {
    this.#inAirport.push(plane);
  }

  instructToLand(plane) {
    plane.land();
    this.addToInAirport(plane);
  }

  getCapacity() {
    return this.#capacity;
  }

  getInAirport() {
    return this.#inAirport;
  }
}

module.exports = Airport;

