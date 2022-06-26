class Airport {

  planesAtAirport = [];

  landPlane(plane) {
    this.planesAtAirport.push(plane);
    console.log(`planesAtAirport length: ${this.planesAtAirport.length}`);
    console.log(this.planesAtAirport);
    return `Confirming that ${plane} has landed`;
  }

}

module.exports = Airport;
