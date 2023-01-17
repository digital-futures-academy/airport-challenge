const Plane = require('./Plane');

class Airport {
  constructor() {
    this.airportCapacity = 2;
  }
  airportPlanes = [];

  landPlane = plane => {
    if (this.airportPlanes.includes(plane)) return;
    if (plane instanceof Plane && this.airportPlanes.length < this.airportCapacity) this.airportPlanes.push(plane);
  };

  takeoffPlane = plane => {
    if (!this.airportPlanes.includes(plane)) return;
    const indexOfPlaneInAirportPlanes = this.airportPlanes.findIndex(airportPlane => airportPlane.id === plane.id);
    if (indexOfPlaneInAirportPlanes > -1) {
      this.airportPlanes.splice(indexOfPlaneInAirportPlanes, 1);
    }
  }

}

module.exports = Airport;

