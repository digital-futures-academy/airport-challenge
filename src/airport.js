

const Plane = require("./plane");


class Airport {
  constructor(airportId, planeObject = new Plane(`pl001`, false), capacity = 10) {
    this.airportId = airportId;
    this.defaultPlane = planeObject;
    this.capacity = capacity;
  }
  #planesInAirport = [];
  #weather = `stormy`;
  setWeather() {
    this.#weather = !this.#weather;
  }
  getPlanesInAirport() {
    return this.#planesInAirport;
  }
  addPlaneInAirport(airportPlane = this.defaultPlane) {
    this.#planesInAirport = [...this.#planesInAirport, airportPlane];
    return `Plan has been landed`;
  }

  checkIfPlaneCanAddedInList(airportPlane = this.defaultPlane) {
    if (this.#planesInAirport.length === 0) return this.addPlaneInAirport(airportPlane);
    for (let i = 0; i < this.#planesInAirport.length; i++) {
      if (this.#planesInAirport[i].planeID === airportPlane.planeID) {
        return `plane is already in airport`;
      }
    }
    return this.addPlaneInAirport(airportPlane);
  }
  takeOffPlaneFromAirport(airportPlane = this.defaultPlane) {
    if (this.#weather === `stormy`) return `Weather is stormy plane cannot take off`;
    for (let i = 0; i < this.#planesInAirport.length; i++) {
      if (this.#planesInAirport[i].planeID === airportPlane.planeID) {
        this.#planesInAirport.splice(i, 1);
        return `plane has taken off`;
      }
    } return `plane is not in airport already take off`;
  }
  landAPlane(airportPlane = this.defaultPlane) {
    if (this.#planesInAirport.length === this.capacity) {
      return `Sorry airport is full, Plan cannot land`;
    }
    return this.checkIfPlaneCanAddedInList(airportPlane);
  }
}











module.exports = Airport;

