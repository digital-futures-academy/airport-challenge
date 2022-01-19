const { Plane } = require('../src/plane');

class Airport {

  static listOfAllAirports = [];

  #name
  #landedPlanes

  constructor(name, airportCapacity = 5) {

    try {
      if (!name) throw new Error(`Entry data is missing for airport name.`);
      if (typeof name != 'string') throw new Error(`An airport's name must be a string input.`);
      if (name.length != 3) throw new Error('Airport names must be in the format of three capital letters. E.g: JFK.')
      this.#name = name
      this.#landedPlanes = [];
      this.airportCapacity = airportCapacity;
      this.numberOfPlanesAtAirport = 0
      Airport.listOfAllAirports.push(name);
    } catch (err) {
      console.log(err.message);
    }
  }

  getAirportName() {
    return this.#name;
  }

  getLandedPlanesList() {
    return this.#landedPlanes;
  }

  getNumberOfPlanesAtAirport() {
    return this.numberOfPlanesAtAirport;
  }

  landPlane(plane) {
    try {
      if (this.numberOfPlanesAtAirport === this.airportCapacity) throw new Error('The airport is at full capacity. This plane cannot land here.')
      this.#landedPlanes.push(plane.getPlaneName())
      plane.setPlaneLocation(this.#name);
      this.numberOfPlanesAtAirport++;
    } catch (err) {
      console.log(err.message);
      return err;
    }
  }
}

module.exports = { Airport };