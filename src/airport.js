const Plane = require('./Plane.js')
class Airport {
  planesAtAirport = []
  planeLands = (planeID) => {
    planeID instanceof Plane ? this.planesAtAirport.push(planeID) : "This is not a plane"
  };

}

module.exports = Airport;
