export default class Airport {
  constructor() {
    this.landedPlanes = [];
    this.maxAirportCapacity = 10;
  }
  
  errorIfWrongStatusType(plane) {
    if (typeof(plane.aircraftStatus) === "string") {
      return true;
    } else {
      throw new Error('Unidentified plane status. Plane status must be a string.')
    }
  };
   errorIfWrongIdType(plane) {
    if (typeof(plane.aircraftId) === "string") {
      return true;
    } else {
      throw new Error('Unidentified plane id. Plane id must be a string.')
    }
  };
  landPlane(plane) {
    try {
      this.errorIfWrongIdType(plane);
      this.errorIfWrongStatusType(plane);
    } catch (error) {
      return error.message;
    }
    if (plane?.aircraftStatus && plane?.aircraftId && !this.isFull()) {
      this.landedPlanes = [...this.landedPlanes, plane];
      plane.aircraftStatus = "landed";
    }
  }

  overrideAirportCapacity(override) {
    this.maxAirportCapacity += override;
  }

  isFull() {
    return this.landedPlanes.length === this.maxAirportCapacity;
  }

  findPlaneById(aircraftId) {
    return this.landedPlanes.findIndex(
      (plane) => plane.aircraftId === aircraftId
    );
  }

  planeTakeOff(aircraftId) {
    const plane = this.landedPlanes[this.findPlaneById(aircraftId)];
    this.landedPlanes.splice(this.findPlaneById(aircraftId), 1);
    plane.aircraftStatus = "departed";
    return `${aircraftId} took off from airport`;
  }
}
