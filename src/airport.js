class Airport {

  planesAtAirport = [];

  capacity = 50;

  landPlane(plane) {
    this.planesAtAirport.push(plane);
    console.log(`planesAtAirport length: ${this.planesAtAirport.length}`);
    console.log(this.planesAtAirport);
    return `Confirming that ${plane} has landed`;
  }

}

module.exports = Airport;
