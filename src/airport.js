class Airport {
  planeList = [];
  capacity = 7;

  landPlane = plane => { this.planeList.push(plane) };

  updateAirportCapacity = capacity => { this.capacity = capacity };
}

module.exports = Airport;
