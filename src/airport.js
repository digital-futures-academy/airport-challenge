class Airport {
  constructor() {
    this.planesAtAirport = [];
  }

  landPlane(plane) {
    this.planesAtAirport.push(plane);
    return this.planesAtAirport;
  }

}


module.exports = Airport;
