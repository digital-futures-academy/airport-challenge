const Plane = require("./Plane");

class Airport {
  landedPlanes = [];
  constructor(airportCap) {
    this.airportCap = airportCap;
  }
  landPlane = (plane) => {
    if (plane instanceof Plane && this.landedPlanes.length < this.airportCap) {
      this.landedPlanes.push(plane);
    }
  };
  increaseAirportCapacityTo = (newCap) => {
    this.airportCap = newCap;
  };
  letPlaneTakeOff = (plane_id) => {
    let planeIndex = this.landedPlanes.findIndex(
      (plane) => plane_id === plane.id
    );
    if (planeIndex === -1) {
      console.log("Item doesn't exist");
    } else {
      this.landedPlanes.splice(planeIndex, 1);
    }
  };
}
module.exports = Airport;
