const Plane = require(`./Plane`)

class Airport {

  #planesAtAirport;


  constructor() {
    this.#planesAtAirport = [];
    this.#airportCapacity = 2;
  }

  landPlane(plane) {
    if (plane instanceof Plane) {
      this.#planesAtAirport.push(plane);
    }

  }

  getPlanesLength() {
    return this.#planesAtAirport.length;
  }

  getPlane(planeId) {
    return this.#planesAtAirport.find(plane => plane.getId() === planeId);
  }


  

module.exports = Airport;