class Airport {

  planesAtAirport = [];

  capacity = 50;

  landPlane(plane) {
    this.planesAtAirport.push(plane);
    console.log(`planesAtAirport length: ${this.planesAtAirport.length}`);
    console.log(this.planesAtAirport);
    return `Confirming that ${plane} has landed`;
  }

  setCapacity(newCapacity) {
    this.capacity = newCapacity
  }

}

module.exports = Airport;
