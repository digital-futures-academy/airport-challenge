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

  setCapacity(newCapacity) {
    this.#capacity = newCapacity;
  }

  isAirportFull() {
    return this.planesAtAirport.length >= this.#capacity;
  }

  takeOffPlane(plane) {
    this.planesAtAirport.pop(plane);
    return `taken off`;

  }

  isPlaneAtAirport(plane) {
    if (this.planesAtAirport.includes(plane)) {
      return true;
    }
    return false;

  }

  // if plane at aiport includes plane return true, othewise return false 



  landPlane(plane) {
    if (this.isAirportFull() === false) {
      this.planesAtAirport.push(plane);


      return `confirming that ${plane} has landed`;
    }
    return `airport is full`;
  }
}

module.exports = Airport;


