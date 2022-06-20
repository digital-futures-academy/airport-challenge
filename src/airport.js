class Airport {
  // here's a starting point for you
  capacity = 10
  planesInAirport = [];
  landPlane(plane) {
    if (this.planesInAirport.length < 1 && !this.planesInAirport.includes(plane)) {
      this.planesInAirport.push(plane)
      console.log(`${plane} has now landed! `)
    } else if (this.planesInAirport.includes(plane)) {
      return "Error - This plane is already at the airport"
    } else {
      return "Airport full, Do NOT land"
    }
  }
}
takeOff(plane) {
  if (this.planesInAirport.includes(planes)) {
    const indexofInput + this.planesInAirport.indexOf(plane)
    this.planesInAirport.splice(indexofInput, 1)

    console.log(`${plane} has now taken off!`)
  } else {
    return `ERROR Plane has already taken off!`
  }
}
module.exports = Airport;
