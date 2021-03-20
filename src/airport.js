class Airport {
  constructor() {
    this.defaultCapacity = 300
    this.currentCapacity = 200
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
}
module.exports = Airport;

 
