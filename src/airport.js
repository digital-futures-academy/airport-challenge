class Airport {
  // here's a starting point for you
  parkedPlanes;
  airportCapacity;

  constructor(airportCapacity = 2) {
    this.parkedPlanes = [];
    this.airportCapacity = airportCapacity;
  }

  landPlane = plane => {
    this.parkedPlanes.push(plane);

    return `Plane ${plane.getId()} has landed at the airport`;
  };

  setAirportCapacity = newAirportCapacity => {
    this.airportCapacity = newAirportCapacity;
  }

}

module.exports = Airport;
