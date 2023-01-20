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

  isPlaneAtAirport = (plane) => {
    return this.planesAtAirport.includes(plane) ? true : false;
  }

  planeLands = (plane) => {
    return plane instanceof Plane && this.atCapacity() === false && this.isPlaneAtAirport(plane) === false ? this.planesAtAirport.push(plane) : "Unable to land";
  };

  planeTakesOff = (plane) => {
    if (this.isPlaneAtAirport(plane)) {
      const index = this.planesAtAirport.indexOf(plane);
      this.planesAtAirport.splice(index, 1);
    } else { return "Plane cannot take off, it is not at the airport" }
  };

}

module.exports = Airport;
