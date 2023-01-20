const Plane = require(`./plane.js`);
class Airport {
  // here's a starting point for you

  constructor(airportPlanes = [], capacity = 10) {
    this.airportPlanes = airportPlanes;
    this.capacity = capacity;
  };

  landPlane = plane => {
    if (plane instanceof Plane && !this.isAirportFull()) this.airportPlanes.push(plane);
  };
  
  takeOffPlane = plane => {
    if (plane instanceof Plane) this.airportPlanes.pop(plane);
    }

  changeCapacity = capacity => {
      this.capacity = capacity;
  };

  isAirportFull = () => {
    if (this.airportPlanes.length === this.capacity)
      return true;
  };

  isPlaneInAirport = plane => {
    if (plane instanceof Plane) !this.airportPlanes.includes(`test1`);

    if (plane instanceof Plane && !this.takeOffPlane());
  };
}

module.exports = Airport;
