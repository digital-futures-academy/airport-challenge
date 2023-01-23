const Plane = require('../src/plane.js')

class Airport {
  // properties

  constructor(airportArray = [], airportCapacity = 10) {
    this.airportArray = airportArray
    this.airportCapacity = airportCapacity
  }
  landPlane = (planeID) => {
    if (planeID instanceof Plane && !this.isAirportFull(planeID)) {
      this.airportArray.push(planeID)
      return this.airportArray.length
    }
  }
  changeCapacity = capacity => {
    if (typeof capacity === 'number') {
      this.capacity = capacity;
      console.log('The capacity of the airport has changed')
    } else {
      console.log('The capacity of the airport has not changed.')
    }
  }
  isAirportFull = () => {
    if (this.airportArray.length === this.capacity)
      return true;
  };
  isPlaneInAirport = planeID => {
    if ((planeID instanceof Plane) && !this.airportArray.includes(planeID)) {
      return true
    }
  }
  planeTakeoff = planeID => {
    if (planeID instanceof Plane && this.isPlaneInAirport(planeID)) {
      this.airportArray.pop(planeID);
    };
  }
}
module.exports = Airport;
