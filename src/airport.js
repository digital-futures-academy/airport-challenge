class Airport {
  planeList = [];

  constructor(capacity = 7) {
    this.capacity = capacity;
  };

  land = plane => { if (!this.airportFull() && !this.planeAtAirport(plane)) this.planeList.push(plane) };

  takeOff = plane => {
    const planeIndexToRemove = this.planeList.findIndex(currentPlane => currentPlane.id === plane.id);

    if (planeIndexToRemove > -1) this.planeList.splice(planeIndexToRemove, 1);
  };

  updateAirportCapacity = capacity => { this.capacity = capacity };

  airportFull = () => { return this.planeList.length == this.capacity ? true : false };

  planeAtAirport = plane => {
    if (this.planeList.find(currentPlane => currentPlane.id === plane.id)) return true;
    return false;
  }
}

module.exports = Airport;
