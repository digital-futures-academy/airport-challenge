const Plane = require('./Plane.js')

class Airport {
  planesAtAirport = []

  constructor(airportCapacity = 10) {
    if (typeof (airportCapacity === 'number') && airportCapacity > 0) {
      this.airportCapacity = airportCapacity
    } else { this.airportCapacity = "Capacity not set, must be a positive integer" };
  };

  atCapacity = () => {
    return this.planesAtAirport.length === this.airportCapacity ? true : false  //Can this be written in a simpler way?
  }

  planeLands = (planeID) => {
    return planeID instanceof Plane && this.atCapacity() === false ? this.planesAtAirport.push(planeID) : "Unable to land";
  };

  planeTakesOff = (planeID) => {
    const index = this.planesAtAirport.indexOf(planeID);
    this.planesAtAirport.splice(index, 1);
  };

}

module.exports = Airport;
