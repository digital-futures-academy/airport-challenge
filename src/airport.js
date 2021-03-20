const Plane = require("./plane")

class Airport {
  constructor() {
    this.defaultCapacity = 300
    this.currentCapacity = 200
    this.location = {
      'airport': 'plane has landed',
      'notInAirport': 'plane has left airport'
    }
  }
  isAirportFull = () => {
    if ( this.currentCapacity >= this.defaultCapacity) {
      return true
    } else {
      return false
    }
  }
  landPlane = (plane) => {
    if (this.isAirportFull()) {
     return 'sorry cannot land plane'
    } else {
      return 'you are free to land' + plane
    }
  }
  changeDefaultCapacity = (capacity) => {
    this.defaultCapacity = capacity
    return this.defaultCapacity 
  }
takeOff = (plane) => {
   return this.location['notInAirport']
  }
}
module.exports = Airport;


