class Airport {
  planeList = [];

  landPlane = plane => { this.planeList.push(plane) };
}

module.exports = Airport;
