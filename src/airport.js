class Airport {
  // here's a starting point for you
  parkingLot = [];

  landPlane(plane) {
    this.parkingLot.push(plane);
    return this.parkingLot;
  }
}

module.exports = Airport;
