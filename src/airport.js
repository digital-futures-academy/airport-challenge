const Plane = require('./Plane');

class Airport {
  constructor() {
    this.airportCapacity = 2;
  }
  airportPlanes = [];

  landPlane = plane => {
    if (plane instanceof Plane && this.airportPlanes < this.airportCapacity) this.airportPlanes.push(plane);
  };

  takeoffPlane = plane => {
    const indexOfPlaneInAirportPlanes = this.airportPlanes.findIndex(airportPlane => airportPlane.id === plane.id);
    if (indexOfPlaneInAirportPlanes > -1) {
      this.airportPlanes.splice(indexOfPlaneInAirportPlanes, 1);
    }
  }

}

module.exports = Airport;
