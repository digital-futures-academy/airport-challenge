class Airport {
  #available;
  #planes;
  #capacity;
  #weather;

  constructor(available = true) {
    this.#available = available;
    this.#planes = [];
    this.#capacity = 3;
    this.#weather = Math.random();
  }

  isAvailable() {
    return this.#available;
  }

  isFull() {
    this.#available = !this.#available;
  }

  getPlanes() {
    return this.#planes;
  }

  addPlane(planeDetails) {
    const newPlane = planeDetails;
    this.#planes.push(newPlane);
  }

  getCapacity() {
    return this.#capacity;
  }

  changeCapacity(num) {
    this.#capacity = num;
    return this.#capacity;
  }

  leavingAirport(plane) {
    this.#planes.pop(plane);
    return this.#planes.length;
  }

  isStormy(num) {
    this.#weather = num;
    if (this.#weather < 0.7) {
      return true;
    } else {
      return false;
    }
  }

  countPlanes() {
    return this.#planes.length;
  }

}

module.exports = Airport;
