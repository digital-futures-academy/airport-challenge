export default class Airport {
  #airportName;
  constructor(airportName = '') {
    this.landedPlanes = [];
    this.maxAirportCapacity = 10;
    this.#airportName = airportName;
  }
  
  getAirportName() {
    return this.#airportName;
  }

  isWeatherStormy(currentWeather) {
    if (currentWeather === 'stormy') {
      throw new Error (`Plane cannot land or take off when weather is ${currentWeather}.`);
    } 
  }

  errorIfWrongStatusType(plane) {
    if (typeof(plane.aircraftStatus) === 'string') {
      return true;
    } else {
      throw new Error('Unidentified plane status. Plane status must be a string.');
    }
  }
  errorIfWrongIdType(plane) {
    if (typeof(plane.aircraftId) === 'string') {
      return true;
    } else {
      throw new Error('Unidentified plane id. Plane id must be a string.');
    }
  }

  isPlaneAtTheAirport(plane) {
    return this.landedPlanes.includes(plane);
  }

  errorPlaneAlreadyAtAirport(plane) {
    if (this.isPlaneAtTheAirport(plane)) {
      throw new Error (`Plane with id ${plane.aircraftId} is already at the airport.`);
    }
  }

  landPlaneChecks(plane) {
    return plane?.aircraftStatus && plane?.aircraftId && !this.isAirportFull() && !this.isPlaneAtTheAirport(plane);
  }

  landPlane(plane, currentWeather = 'clear') {
    this.isWeatherStormy(currentWeather);
    this.errorPlaneAlreadyAtAirport(plane);
    this.errorIfWrongIdType(plane);
    this.errorIfWrongStatusType(plane);
    if (this.landPlaneChecks(plane)) {
      this.landedPlanes = [...this.landedPlanes, plane];
      plane.aircraftStatus = 'landed';
      plane.landedAtAirport = this.getAirportName(); 
    }
  }

  landedPlanesChecks() {
    this.landedPlanes.map(plane => {
      if ( plane.landedAtAirport != this.#airportName) {
        throw new Error('Landed planes must be at an airport!');
      }
    })
  }

  overrideAirportCapacityBy(override) {
    this.maxAirportCapacity += override;
  }

  isAirportFull() {
    return this.landedPlanes.length === this.maxAirportCapacity;
  }

  findPlaneById(aircraftId) {
    const planeToLandLocation = this.landedPlanes.findIndex(
      (plane) => plane.aircraftId === aircraftId
    );
    return this.landedPlanes[planeToLandLocation]; 
  }
  
  takeOffChecks(aircraftId) {
    const planeIndex = this.findPlaneById(aircraftId);
    if (planeIndex === undefined) {
      throw new Error('Plane to depart must be at the airport');
    }
  }

  planeTakeOff(aircraftId, currentWeather = 'clear') {
    this.isWeatherStormy(currentWeather);
    this.takeOffChecks(aircraftId);
    const departedPlane = this.landedPlanes.splice(this.findPlaneById(aircraftId), 1);
    departedPlane[0].aircraftStatus = 'departed';
    return `${departedPlane[0].aircraftId} took off from airport`;
  }
}
