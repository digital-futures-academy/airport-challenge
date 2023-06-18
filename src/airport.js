class Airport {

  #airportPlane;
  #planesAtAirport = [];

  constructor(planeObject) {
    this.#airportPlane = planeObject;
  }

  landPlane() {
    this.#planesAtAirport.push(this.#airportPlane);
  }

  getPlanesLength() {
    return this.#planesAtAirport.length;
  }
}

module.exports = Airport; 