class Airport {
  #available;
  #planes;

  constructor(available = true) {
    this.#available = available;
    this.#planes = [];
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

}

module.exports = Airport;
