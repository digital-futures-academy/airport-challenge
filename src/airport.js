class Airport {
  planesAtAirport = [];

  landPlane = plane => {
    this.planesAtAirport.push(plane);
  }

}

module.exports = Airport;
