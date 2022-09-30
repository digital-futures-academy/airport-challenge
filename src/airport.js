class Airport {
  // here's a starting point for you
  planesAtAirport = [];
  constructor() {}
  landPlane = (plane) => {
    this.planesAtAirport.push(plane);
  };
}

module.exports = Airport;
