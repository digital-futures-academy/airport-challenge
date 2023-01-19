const Plane = require('./Plane');

class Airport {
  airportPlanes = [];

  constructor(airportCapacity = 5) {
    this.airportCapacity = airportCapacity;
  }

  isAirportFull() {
    return (this.airportPlanes.length > this.airportCapacity) ? true : false

  }

  landPlane(plane) {
    if (plane instanceof Plane && this.isAirportFull() == false) {
      return this.airportPlanes.push(plane)
    }

    else { console.log('Airport is full and plane cannot land') }
  }



};





module.exports = Airport;
