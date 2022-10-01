class Airport {
  constructor() {
    this.arrPlanes = [];
  }

  land(plane) {
    this.arrPlanes.push(plane);
  }

}

module.exports = Airport;
