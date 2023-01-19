const Plane = require(`./plane.js`);
class Airport {
  // here's a starting point for you
  //airportPlanes = [];
  //capacity = 10;

  constructor(airportPlanes = [], capacity = 10) {
    this.airportPlanes = airportPlanes;
    this.capacity = capacity;
  }

  landPlane = plane => {
    if (plane instanceof Plane && !this.isAirportFull()) this.airportPlanes.push(plane);
    };

  changeCapacity = capacity => {
      this.capacity = capacity;
  };

  isAirportFull = () => {
    if (this.airportPlanes.length === this.capacity)
      return true;
  };
}
module.exports = Airport;
