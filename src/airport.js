class Airport {
  planeList = [];
  capacity = 7;

  landPlane = plane => { this.planeList.push(plane) };
}

module.exports = Airport;
