class Airport {
  airportPlanes = [];

  landPlane = plane => { this.airportPlanes.push(plane) };
}

module.exports = Airport;
