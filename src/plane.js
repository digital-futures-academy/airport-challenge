export default class Plane {
  constructor(aircraftId = '', aircraftStatus = '', landedAtAirport = '') {
    this.aircraftId = aircraftId;
    this.aircraftStatus = aircraftStatus;
    this.landedAtAirport = landedAtAirport;
  }

  // getAirportName() {
  //   return this.#landedAtAirport.getAirportName();
  // }

  // setLandedAtAirport(airport) {
  //   return this.#landedAtAirport = airport;
  // }
}
