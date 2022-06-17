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

  isFull() {
    if (this.#inAirport.length < this.#capacity) {
      return false;
    } else {
      return true;
    }
  }

  getCapacity() {
    return this.#capacity;
  }

  getInAirport() {
    return this.#inAirport;
  }

  setCapacity(number) {
    this.#capacity = number;
  }
}

module.exports = Airport;

