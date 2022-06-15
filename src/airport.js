//class for airports to store list of planes in airport and capacity of airport
//also have two methods/functions that tells weather plane can land or no on basis of capacity and already landed planes

const Plane = require("./plane");


class Airport {
  constructor(airportId, planeObject = new Plane(`pl001`), capacity = 10) {
    this.airportId = airportId;
    this.airportPlane = planeObject;
    this.capacity = capacity;
  }
  #planeCanLand = true;
  #planesInAirport = [];
  // #planesInAirport = [Plane.plane2, Plane.plane1, Plane.plane4, Plane.plane5];
  getPlaneCanLand() {
    return this.#planeCanLand;
  }
  setPlaneCanLand() {
    this.#planeCanLand = !this.#planeCanLand;
  }
  getPlanesInAirport() {
    return this.#planesInAirport;
  }
  isAirportFull() {
    if (this.#capacity === this.#planesInAirport.length) return `airport is full`;
    return `airport is not full`;
  }
  landAPlane(airportPlane) {
    if (this.getPlaneCanLand()) {
      this.#planesInAirport = [...this.#planesInAirport, airportPlane];
      return `Plan has been landed`;
    }
    return `Sorry Plan cannot land`;
  }
}









module.exports = Airport;

