class Airport {
  // here's a starting point for you
  constructor(capacity, airspace, airplanes) {
    this.capacity = capacity;
    this.airspace = airspace;
    this.airplanes = airplanes;
  }

  land(tailNumber) {
    if (!this.airspace.includes(tailNumber)) {
      return `Landing unsuccessful; ${tailNumber} cannot be found in airspace`;
    } else if (!this.capacity > this.airplanes.length) {
      return `Landing unsuccessful; Airport is full`;
    } else if (this.airspace.includes(tailNumber) && this.capacity > this.airplanes.length) {
      this.airplanes.push(tailNumber);
      this.airspace = this.airspace.filter(e => e !== tailNumber)
      return `Landing successful; ${tailNumber} has arrived at airport`;
    }
  }
}

module.exports = Airport;
