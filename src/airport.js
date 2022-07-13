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
  takeOff(plane) {
    this.planesInAirport.pop(plane);
    console.log(`planesInAirport length: ${this.planesInAirport.length}`);
    return `Plane has now taken off!`

  }
}

module.exports = Airport; 