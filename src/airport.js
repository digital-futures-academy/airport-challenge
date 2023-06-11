export default class Airport {
  constructor() {
    this.landedPlanes = [];
    this.departedPlanes = [];
    this.maxAirportCapacity = 0;
  }
  landPlane(plane) {
    if (plane.status != 'landed') {
      this.landedPlanes.push(plane);
    }
    plane.status = 'landed';
  }
  overrideAirportCapacity(override) {
    this.maxAirportCapacity += override;
  }
  isFull() {
    return this.landedPlanes.length === this.maxAirportCapacity;
  }
  planeTakeOff(planeName) {
    const planeToTakeOff = this.landedPlanes.findIndex(plane => plane.name === planeName);
    const plane = this.landedPlanes[planeToTakeOff];
    if (plane.status != 'departed') {
      this.departedPlanes.push(plane);
    }
    this.landedPlanes.splice(planeToTakeOff, 1);
    plane.status = 'departed';
    return `${planeName} took off from airport`
  }
}


