const Plane = require(`./plane.js`);
class Airport {
  // here's a starting point for you

  constructor(airportPlanes = [], capacity = 10) {
    this.airportPlanes = airportPlanes;
    this.capacity = capacity;
  };

  landPlane = plane => {
    if (plane instanceof Plane && !this.isAirportFull(plane)) {
      this.airportPlanes.push(plane);
    };
  }
  takeOffPlane = plane => {

    if (plane instanceof Plane && this.isPlaneInAirport(plane)) {
      this.airportPlanes.pop(plane);
    };
    }

  changeCapacity = capacity => {
      this.capacity = capacity;
  };

  isAirportFull = () => {
    if (this.airportPlanes.length === this.capacity)
      return true;
  };

  isPlaneInAirport = plane => {
    if ((plane instanceof Plane) && !this.airportPlanes.includes(plane)) {
      return true
    } else {
      return false;
    }
  };
}

module.exports = Airport;
