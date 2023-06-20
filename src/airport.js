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
      if (this.getPlane(plane.getId())) {
        return false
      } else {
        this.#planesAtAirport.push(plane);
      }

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

  takeOffPlane(planeId) {
    const planeIndex = this.#planesAtAirport.findIndex(plane => plane.getId() === planeId);
    if (planeIndex === -1) {
      return false;
    }
    this.#planesAtAirport.splice(planeIndex, 1);
  }
}

module.exports = Airport; 