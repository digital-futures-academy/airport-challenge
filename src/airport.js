class Airport {
  planeList = [];

  constructor(capacity = 7) {
    this.capacity = capacity;
  };

  addPlane = plane => { if (!this.airportFull()) this.planeList.push(plane) };

  updateAirportCapacity = capacity => { this.capacity = capacity };

  airportFull = () => { return this.planeList.length == this.capacity ? true : false };
}

module.exports = Airport;
