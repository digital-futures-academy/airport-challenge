const { Plane } = require('../src/plane');
const { WeatherReport } = require('./weather');

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
    console.log(this.#landedPlanes)
    return this.#landedPlanes;
  }

  getNumberOfPlanesAtAirport() {
    console.log(this.numberOfPlanesAtAirport);
    return this.numberOfPlanesAtAirport;
  }

  confirmPlaneHasLeft(plane) {
    this.#landedPlanes.includes(plane.getPlaneName()) ? console.log(`${plane.getPlaneName()} is at ${this.#name}`) : console.log(`${plane.getPlaneName()} is not at ${this.#name}`)
  }

  landPlane(plane, weatherReport) {
    try {

      if (!(plane instanceof Plane)) throw new Error('Entry data must be an instance of Plane.');
      if (!(weatherReport instanceof WeatherReport)) throw new Error('Entry data must have an instance of WeatherReport.');
      if (weatherReport.stormyWeather === true) throw new Error('The weather is stormy and planes are not able to land right now.')
      if (this.#landedPlanes.includes(plane.getPlaneName())) throw new Error('This plane has already landed at this airport and cannot do so again.')
      if (this.numberOfPlanesAtAirport === this.airportCapacity) throw new Error('The airport is at full capacity. This plane cannot land here.')

      this.#landedPlanes.push(plane.getPlaneName())
      plane.setPlaneLocation(this.#name);
      this.numberOfPlanesAtAirport++;

    } catch (err) {
      console.log(err.message);
      return err;
    }
  }

  planeTakeOff(plane, weatherReport) {
    try {

      if (!(plane instanceof Plane)) throw new Error('Entry data must have an instance of Plane.');
      if (!(weatherReport instanceof WeatherReport)) throw new Error('Entry data must have an instance of WeatherReport.');
      if (weatherReport.stormyWeather === true) throw new Error('The weather is stormy and planes are not able to take off right now.')
      if (this.#landedPlanes.includes(plane.getPlaneName()) === false) throw new Error('This plane is not currently at the airport. Take off request is invalid.');

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







