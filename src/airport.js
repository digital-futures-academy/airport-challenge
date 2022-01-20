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
      if (!(plane instanceof Plane)) throw new Error('Entry data must be an instance of Plane.');
      if (this.#landedPlanes.includes(plane.getPlaneName())) throw new Error('This plane has already landed a this Airport and cannot do so again.')
      if (this.numberOfPlanesAtAirport === this.airportCapacity) throw new Error('The airport is at full capacity. This plane cannot land here.')
      this.#landedPlanes.push(plane.getPlaneName())
      plane.setPlaneLocation(this.#name);
      this.numberOfPlanesAtAirport++;
    } catch (err) {
      console.log(err.message);
      return err;
    }
  }

  planeTakeOff(plane) {
    try {
      if (!(plane instanceof Plane)) throw new Error('Entry data must be an instance of Plane.');
      if (this.#landedPlanes.includes(plane.getPlaneName()) === false) throw new Error('This plane is not currently at the airport and cannot take off from here.');
      const planeIndex = this.#landedPlanes.indexOf(plane.getPlaneName());
      this.#landedPlanes.splice(planeIndex, 1);
      this.numberOfPlanesAtAirport--;
      plane.setPlaneLocation('sky');
    } catch (err) {
      console.log(err.message);
      return err;
    }
  }


}

module.exports = { Airport };

// I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

const testPlane1 = new Plane('plane1');
const testPlane2 = new Plane('plane2');
const testPlane3 = new Plane('plane3');

const testAirport = new Airport('TST', 1);

console.log(testAirport.getLandedPlanesList());
console.log(testAirport.getNumberOfPlanesAtAirport());

testAirport.landPlane(10);
testAirport.landPlane(testPlane2);
testAirport.landPlane(testPlane3);

console.log(testAirport.getLandedPlanesList());
console.log(testAirport.getNumberOfPlanesAtAirport());

console.log(testAirport.getLandedPlanesList().indexOf('plane2'));

testAirport.planeTakeOff(testPlane3);
testAirport.planeTakeOff(testPlane2);

console.log(testAirport.getLandedPlanesList());
console.log(testAirport.getNumberOfPlanesAtAirport());





