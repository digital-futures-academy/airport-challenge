const Plane = require("./plane");

class Airport {
  // here's a starting point for you
  constructor(maxPlaneCapacity = 10, airportID) {
    this.landedPlanes = [];
    this.maxPlaneCapacity = maxPlaneCapacity;

    this.airportID = airportID;
  }
  land(landingPlane) {
    if ((landingPlane instanceof Plane) && (this.landedPlanes.length < this.maxPlaneCapacity)) {
      this.landedPlanes.push(landingPlane);
    }
  }

  takeOff(leavingPlane) {
    if (this.landedPlanes.includes(leavingPlane)) {
      let planeToRemove = this.landedPlanes.indexOf(leavingPlane);
      this.landedPlanes.splice(planeToRemove);

    }
  }
}

module.exports = Airport;
