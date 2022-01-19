class Airport {
  // here's a starting point for you
  constructor(capacity, airspace, airplanes) {
    this.capacity = capacity;
    this.airspace = airspace;
    this.airplanes = airplanes;
  }

  land(tailNumber) {
    if (!this.airspace.includes(tailNumber)) {
      return `Landing unsuccessful; ${tailNumber} cannot be found in airspace`
    }
  }


}

module.exports = Airport;
