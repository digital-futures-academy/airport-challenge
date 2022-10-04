class Airport {
  // here's a starting point for you
  parkedPlanes;

  constructor() {
    this.parkedPlanes = [];
  }

  landPlane = plane => {
    this.parkedPlanes.push(plane);

    return `Plane ${plane.getId()} has landed at the airport`;
  };

}

module.exports = Airport;
