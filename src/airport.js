class Airport {
  #available;
  #planes;
  #capacity;

  constructor(available = true) {
    this.#available = available;
    this.#planes = [];
    this.#capacity = 3;
  }

  isAvailable() {
    return this.#available;
  }

  isFull() {
    this.#available = !this.#available;
  }

  getPlanes() {
    if (this.#available === false) {
      return new Error(`Planes cannot land when the airport is unavailable`);
    } else {
      return this.#planes;
    }

  }

  addPlane(planeDetails) {
    const newPlane = planeDetails;
    this.#planes.push(newPlane);
  }

  getCapacity() {
    return this.#capacity;
  }

}

module.exports = Airport;
