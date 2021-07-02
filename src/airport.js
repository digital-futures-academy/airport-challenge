class Airport {
  // here's a starting point for you
  constructor() {
    this.planes = [],
    this.capacity = 100
  }

  landPlane(plane) {
      let boo = this.inAirport(plane)
      if (boo === true) {
        console.log('This plane has already landed!')
      } else {
        if (this.planes.length < this.capacity) {
          this.planes.push(plane._name);
        } else {
          console.log('Abort landing! The airport is full!')
        }
      }
      return this.planes
    }

  capacityOverride(num) {
    this.capacity = num
    return this.capacity
  }

  takeOff(plane) {
    let boo = this.inAirport(plane)
    if (boo === false) {
      console.log('This plane has already taken off!')
    } else {let index = this.planes.indexOf(plane._name)
    this.planes.splice(index, 1)
  }
    return this.planes
  }

  inAirport(plane) {
    if (this.planes.includes(plane._name)) {
      return true
    } else {
      return false
    }
  }
}


module.exports = Airport;
