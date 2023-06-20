class Plane {
  constructor(aircraftId = '', aircraftStatus = '', currentAirportId = '') {
    this.aircraftId = aircraftId;
    this.aircraftStatus = aircraftStatus;
    this.currentAirportId = currentAirportId;
  }
}

module.exports = Plane;

  // getAirportName() {
  //   return this.#landedAtAirport.getAirportName();
  // }

  // setLandedAtAirport(airport) {
  //   return this.#landedAtAirport = airport;
  // }

