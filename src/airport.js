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
    if (this.isFull() === false) {
      plane.land();
      this.addToInAirport(plane);
    }
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

  removeFromInAirport(plane) {
    // use .filter() to return a new array that contains all items where the plane.getPlaneId does NOT match that of the plane object passed into removedFromInAirport().
    this.#inAirport = this.#inAirport.filter(item => item.getPlaneId() !== plane.getPlaneId())
    return true;
  }

  setCapacity(number) {
    this.#capacity = number;
  }
}

module.exports = Airport;

