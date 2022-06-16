// class for airports to store airportId, list of planes in airport and capacity of airport
// also have two SETTER,GETTER methods/functions 
// that sets the values and provide the values of private properties(encapsulated)
// also have two methods/functions 
// landAPlane tells weather plane can land or no on basis of capacity and already landed planes
// isAirportFull checks airport is full or no

const Plane = require("./plane");


class Airport {
  constructor(airportId, planeObject = new Plane(`pl001`), capacity = 10) {
    this.airportId = airportId;
    this.airportPlane = planeObject;
    this.capacity = capacity;
  }
  #planeCanLand = true;
  #planesInAirport = [];
  getPlaneCanLand() {
    return this.#planeCanLand;
  }
  setPlaneCanLand() {
    this.#planeCanLand = !this.#planeCanLand;
  }
  getPlanesInAirport() {
    return this.#planesInAirport;
  }
  setPlanesInAirport(airportPlane) {
    this.#planesInAirport = [...this.#planesInAirport, airportPlane];
  }
  isAirportFull(airportPlane = this.airportPlane) {
    if (this.capacity === this.getPlanesInAirport().length) {
      return `Sorry airport is full`
    };
    this.landAPlane(airportPlane);
    return `airport is not full`;
  }
  landAPlane(airportPlane) {
    if (this.getPlaneCanLand() && this.capacity <= 5) {
      this.setPlanesInAirport(airportPlane);
      this.getPlanesInAirport();
      return `Plan has been landed`;
    }
    return `Sorry Plan cannot land`;
  }
}









module.exports = Airport;

