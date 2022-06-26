class Airport {
  // here's a starting point for you
  planesAtAirport = [];

  landPlane(plane) {
    this.planesAtAirport.push(plane);
    console.log(this.planesAtAirport);
    console.log(`planesAtAirport length: ${this.planesAtAirport.length}`)
    return ``;
  }
}

module.exports = Airport;
