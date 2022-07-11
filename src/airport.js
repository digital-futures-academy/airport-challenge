class Airport {
  // here's a starting point for you
  planesInAirport = [];
  #airportCapacity;

  landPlane(plane) {
    this.planesInAirport.push(plane);
    console.log(`planesInAirport length: ${this.planesInAirport.length}`);
    console.log(this.planesInAirport);
    return `${plane} has now landed!`;
  }

  constructor(airportCapacity = 5) {
    this.#airportCapacity = airportCapacity;
  }

  airportCapacity(value) {
    this.#airportCapacity = value;
  }

  getairportCapacity() {
    return this.#airportCapacity;
  }

  setairportCapacity(newairportCapacity) {
    this.#airportCapacity = newairportCapacity;
  }

  fullAirport = airportCapacity => {
    if (planesInAirport.length <= airportCapacity)
      return landPlane(plane);
    else
      return "ERROR! Airport full, Do NOT land"
  }
};

// takeOff(plane); {
// if (this.planesInAirport.includes(planes)) {
//  const indexofInput = + this.planesInAirport.indexOf(plane)
//   this.planesInAirport.splice(indexofInput, 1)

//  console.log(`${plane} has now taken off!`)
// } else {
//  console.log(`ERROR Plane has already taken off!`)
// }
// }

module.exports = Airport; 
