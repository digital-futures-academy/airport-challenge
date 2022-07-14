class Airport {
  // here's a starting point for you
  planesInAirport = [];
  #airportCapacity;

  landPlane(plane) {
    if (!this.planesInAirport.includes(plane) && !this.airportCapacity <= this.planesInAirport.length) {
      this.planesInAirport.push(plane);
      console.log(`planesInAirport length: ${this.planesInAirport.length}`);
      console.log(this.planesInAirport);
      return `${plane} has now landed!`;
    } else {
      return `ERROR! Plane has already landed!`
    }
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
    if (this.planesInAirport.includes(plane) && this.airportCapacity >= this.planesInAirport) {
      this.planesInAirport.pop(plane);
      console.log(`planesInAirport length: ${this.planesInAirport.length}`);
      return `Plane has now taken off!`
    } else {
      console.log(`ERROR! Plane has already taken off!`)
    }
  }
  planeLanded(plane) {
    this.planesInAirport.includes(plane);
    return true
  }
  planeTakenOff(plane) {
    this.planesInAirport.pop;
    return true
  }
}
module.exports = Airport; 