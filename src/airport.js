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

}

module.exports = Airport;
