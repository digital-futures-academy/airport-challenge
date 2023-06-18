class Airport {


  #planesAtAirport;

  constructor() {
    this.#planesAtAirport = [];
  }

  landPlane(plane) {
    this.#planesAtAirport.push(plane);
  }

  getPlanesLength() {
    return this.#planesAtAirport.length;
  }

}

module.exports = Airport;
