class Airport {
  capacity = 10
  planesInAirport = [];
  landPlane = input => {
    if (this.planesInAirport.length < 10 && !this.planesInAirport.includes(input)) {
      this.planesInAirport.push(input)
      console.log(`${input}  Has now landed!`)
    } else if (this.planesInAirport.includes(input)) {
      return `Error!! Plane is already at  the airport`
    } else {
      return `This airport is full! You cannot land here`
    }
  }
  takeOff = input => {
    if (this.planesInAirport.includes(input)) {
      const indexOfInput = this.planesInAirport.indexOf(input)
      this.planesInAirport.splice(indexOfInput, 1)


      console.log(`${input}  Has now taken off!`)

    } else {
      return `Error!! Plane has already taken off`
    }
  }
}


module.exports = Airport;
