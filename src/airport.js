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
    if (this.planesAtAirport.includes(plane) === true);
  }




  landPlane(plane) {
    if (this.isAirportFull() === false) {
      this.planesAtAirport.push(plane);


      return `confirming that ${plane} has landed`;
    }
    return `airport is full`;
  }
}

module.exports = Airport;


//=== true) {
//  return `${Airport} is full`;