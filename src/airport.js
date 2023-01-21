const Plane = require('./Plane');

class Airport {
  constructor() {
    this.airportCapacity = 2;
  }
  airportPlanes = [];

  //I feel like there's a more elegant way to use the if return statements so that they're not repeated in landPlane and takeOffPlane?
  landPlane = plane => {
    if (this.airportPlanes.includes(plane)) return;
    if (plane instanceof Plane && this.airportPlanes.length < this.airportCapacity) this.airportPlanes.push(plane);
  };

  takeOffPlane = plane => {
    if (!this.airportPlanes.includes(plane)) return;
    const indexOfPlaneInAirportPlanes = this.airportPlanes.findIndex(airportPlane => airportPlane.id === plane.id);
    if (indexOfPlaneInAirportPlanes > -1) {
      this.airportPlanes.splice(indexOfPlaneInAirportPlanes, 1);
    }

  }
}

module.exports = Airport;

//This is tightly coupled with the Plane object, but I'm not sure how to address that without transferring the coupling into the Plane.js instead! 


