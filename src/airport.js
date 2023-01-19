class Airport {
  planeList = [];

  constructor(capacity = 7) {
    this.capacity = capacity;
  };

  land = plane => {
    if (!this.airportFull() && plane.id != -1 && !plane.landed) {
      this.planeList.push(plane);
      plane.land();
    }
  };

  takeOff = plane => {
    const planeIndexToRemove = this.planeList.findIndex(currentPlane => currentPlane.id === plane.id);

    if (planeIndexToRemove > -1) {
      this.planeList.splice(planeIndexToRemove, 1);
      plane.takeOff();
    }
  };

  updateAirportCapacity = capacity => { this.capacity = capacity };

  airportFull = () => { return this.planeList.length == this.capacity ? true : false };

  planeAtAirport = plane => {
    if (this.planeList.find(currentPlane => currentPlane.id === plane.id)) return true;
    return false;
  }
}

module.exports = Airport;
