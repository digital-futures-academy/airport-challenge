class Airport {
  capacity = 10
  planesInAirport = [];
  landPlane(plane) {
    if (this.planesInAirport.length < 10 && !this.planesInAirport.includes(plane)) {
      this.planesInAirport.push(plane)
      console.log(`${plane} has now landed!`)
    } else if (this.planesInAirport.includes(plane)) {
      return `Error - This plane is already at the airport`
    } else {
      return `Airport full, DO NOT LAND!`
    }
  }
  takeOff(plane) {
    if (this.planesInAirport.includes(plane)) {
      const indexOfInput = this.planesInAirport.indexOf(plane)
      this.planesInAirport.splice(indexOfInput, 1)

      console.log(`${plane} has now taken off!`)

    } else {
      return `Error - Plane has already taken off`
    }
  }
}

module.exports = Airport;
