const { Plane } = require('../src/plane');

class Airport {

  static listOfAllAirports = [];

  #name
  #landedPlanes

  constructor(name) {

    try {
      if (!name) throw new Error(`Entry data is missing for airport name.`);
      if (typeof name != 'string') throw new Error(`An airport's name must be a string input.`);
      if (name.length != 3) throw new Error('Airport names must be in the format of three capital letters. E.g: JFK.')
      this.#name = name
      this.#landedPlanes = [];
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

  landPlane(plane) {
    this.#landedPlanes.push(plane.getPlaneName())
    plane.setPlaneLocation(this.#name);
  }


}

let testAirport = new Airport('LVE');
let testPlane = new Plane('HelloPlane')

console.log(testAirport.getLandedPlanesList());

testAirport.landPlane(testPlane);

console.log(testAirport.getLandedPlanesList());

console.log(testPlane.getLocation());

module.exports = { Airport };
