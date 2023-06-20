class Plane {
  constructor(aircraftId = '', aircraftStatus = '', landedAtAirport = '') {
    this.aircraftId = aircraftId;
    this.aircraftStatus = aircraftStatus;
    this.landedAtAirport = landedAtAirport;
  }
}

module.exports = Plane;

  // getAirportName() {
  //   return this.#landedAtAirport.getAirportName();
  // }

  // setLandedAtAirport(airport) {
  //   return this.#landedAtAirport = airport;
  // }

