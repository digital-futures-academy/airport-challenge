class Airport {
  // here's a starting point for you
  constructor(maxPlaneCapacity = 10, airportID) {
    this.landedPlanes = [];
    this.maxPlaneCapacity = maxPlaneCapacity;
    this.airportID = airportID;
  }

  land(landingPlane) {
    if (this.landedPlanes.length < this.maxPlaneCapacity) {
      this.landedPlanes.push(landingPlane);
    }
  }
}

module.exports = Airport;
