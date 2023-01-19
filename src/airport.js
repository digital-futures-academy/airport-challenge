const Plane = require('./Plane.js')
class Airport {
  planesAtAirport = []
  constructor(airportCapacity = 10) {
    this.airportCapacity = airportCapacity
  }
  planeLands = (planeID) => {
    return planeID instanceof Plane ? this.planesAtAirport.push(planeID) : "Unable to land";
  };

}

module.exports = Airport;
