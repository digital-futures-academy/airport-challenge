export default class Airport {
  constructor() {
    this.landedPlanes = [];
    this.departedPlanes = [];
    this.maxAirportCapacity = 10;
  }
  landPlane(plane) { 
    if (plane?.aircraftId && plane?.aircraftStatus && !this.isFull()) {
      this.landedPlanes = [...this.landedPlanes, plane];
      plane.aircraftStatus = 'landed';
    }
  }
  overrideAirportCapacity(override) {
    this.maxAirportCapacity += override;
  }
  isFull() {
    return this.landedPlanes.length === this.maxAirportCapacity;
  }
  planeTakeOff(aircraftId) {
    const planeToTakeOff = this.landedPlanes.findIndex(plane => plane.aircraftId === aircraftId);
    const plane = this.landedPlanes[planeToTakeOff];
    if (plane.aircraftStatus != 'departed') {
      this.departedPlanes.push(plane);
    }
    this.landedPlanes.splice(planeToTakeOff, 1);
    plane.aircraftStatus = 'departed';
    return `${aircraftId} took off from airport`
  }
}


