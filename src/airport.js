const Plane = require('./Plane.js')

class Airport {
  planesAtAirport = []

  constructor(airportCapacity = 10) {
    if (typeof (airportCapacity === 'number') && airportCapacity > 0) {
      this.airportCapacity = airportCapacity
    } else { this.airportCapacity = "Capacity not set, must be a positive integer" };
  };

  planeLands = (planeID) => {
    return planeID instanceof Plane && this.atCapacity() === false ? this.planesAtAirport.push(planeID) : "Unable to land";
  };

  atCapacity = () => {
    return this.planesAtAirport.length === this.airportCapacity ? true : false  //Can this be written in a simpler way?
  }

}

module.exports = Airport;
