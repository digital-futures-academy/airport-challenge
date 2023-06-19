const Plane = require(`./Plane`)

class Airport {

  #planesAtAirport;
  #airportCapacity;

  constructor() {
    this.#planesAtAirport = [];
    this.#airportCapacity = 2;
  }

  landPlane(plane) {
    if (plane instanceof Plane && !this.isAirportFull()) {
      this.#planesAtAirport.push(plane);
    }

  }

  getPlanesLength() {
    return this.#planesAtAirport.length;
  }

  getPlane(planeId) {
    return this.#planesAtAirport.find(plane => plane.getId() === planeId);
  }

  changeAirportCapacity(capacity) {
    const parsedCapacity = parseInt(capacity);
    if (!isNaN(parsedCapacity)) {
      return this.#airportCapacity += parsedCapacity;
    } else {
      return false;
    }

  }

  isAirportFull() {
    return this.#airportCapacity === this.getPlanesLength();
  }

  takeOffPlane() {
    this.#planesAtAirport.pop();
  }


}

module.exports = Airport; 