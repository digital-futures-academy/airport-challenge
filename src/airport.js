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

  getPlane(planeId) {
    return this.#planesAtAirport.find(plane => plane.getId() === planeId);
  }

}

module.exports = Airport;
