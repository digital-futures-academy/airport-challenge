const Plane = require(`./plane.js`);
class Airport {
  // here's a starting point for you
  airportPlanes = [];
  capacity = 10;

  landPlane = plane => {
    if (plane instanceof Plane) this.airportPlanes.push(plane)
    
    };

  changeCapacity = capacity => {
      this.capacity = capacity;
  };

  isAirportFull = capacity => {
    if (capacity === 10)
      return true;
  };
}
module.exports = Airport;
