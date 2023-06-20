export default class Plane {
  #landedAtAirport;
  constructor(aircraftId = '', aircraftStatus = '') {
    this.aircraftId = aircraftId;
    this.aircraftStatus = aircraftStatus;
  }

  getAirportName() {
    return this.#landedAtAirport.getAirportName();
  }

  setLandedAtAirport(airport) {
    return this.#landedAtAirport = airport;
  }
}
