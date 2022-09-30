class Airport {
  landedPlanes = [];

  landPlane = plane => {
    this.landedPlanes.push(plane);
  };

  airportCapacity = (capacity) => {
    return this.capacity = capacity;
  };

}

module.exports = Airport;
