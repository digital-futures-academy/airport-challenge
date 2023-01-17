const Plane = require('./Plane.js')
class Airport {
  planesAtAirport = []
  constructor(airportCapacity = 10) {
    this.airportCapacity = airportCapacity
  }
  planeLands = (planeID) => {
    planeID instanceof Plane ? this.planesAtAirport.push(planeID) : "This is not a plane"
  };

}

module.exports = Airport;
