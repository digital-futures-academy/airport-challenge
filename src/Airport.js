export default class Airport {

  constructor(airportId = '') {
    this.landedPlanes = [];
    this.maxAirportCapacity = 10;
    this.airportId = airportId;
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

  errorPlaneAlreadyAtAnAirport(plane) {
    if (plane.aircraftStatus === 'landed') {
      throw new Error (`Cannot land plane with id ${plane.aircraftId}. It has landed at a different airport.`);
    }
  }

  landPlaneChecks(plane, currentWeather = 'clear') {
    this.isWeatherStormy(currentWeather);
    this.errorPlaneAlreadyAtAirport(plane);
    this.errorIfWrongIdType(plane);
    this.errorIfWrongStatusType(plane);
    this.errorPlaneAlreadyAtAnAirport(plane);
    return plane?.aircraftStatus && plane?.aircraftId && !this.isAirportFull() && !this.isPlaneAtTheAirport(plane) && plane.aircraftStatus !== 'landed';
  }

  landPlane(plane, currentWeather = 'clear') {
    if (this.landPlaneChecks(plane, currentWeather)) {
      this.landedPlanes = [...this.landedPlanes, plane];
      plane.aircraftStatus = 'landed';
      plane.currentAirportId = this.airportId; 
    }
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

  landedPlanesChecks() {
    this.landedPlanes.map(plane => {
      if ( plane.currentAirportId !== this.airportId) {
        throw new Error('Landed planes must be at an airport!');
      }
    });
  }
  
  getLandedPlanes() {
    this.landedPlanesChecks();
    return this.landedPlanes;
  }
}
