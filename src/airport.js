class Airport {
  // here's a starting point for you
  parkedPlanes;
  airportCapacity;

  constructor(airportCapacity = 2) {
    this.parkedPlanes = [];
    this.airportCapacity = airportCapacity;
  };

  landPlane = plane => {
    if (this.isAirportFull()) {
      return `Plane ${plane.getId()} can not land as the airport is full`;
    } else {
      this.parkedPlanes.push(plane);
      return `Plane ${plane.getId()} has landed at the airport`;
    }
  };

  setAirportCapacity = newAirportCapacity => {
    this.airportCapacity = newAirportCapacity;
  }

  isAirportFull = () => {
    if (this.parkedPlanes.length >= this.airportCapacity) {
      return true;
    } else {
      return false;
    }
  };

  takeOffPlane = (planeID) => {
    for (let i in this.parkedPlanes) {
      if (this.parkedPlanes[i].getId() === planeID) {
        let indexToSplice = this.parkedPlanes.indexOf(this.parkedPlanes[i]);
        this.parkedPlanes.splice(indexToSplice, 1);
        return `Plane ${planeID} has taken off from the airport`;
      }
    }
  };

  isPlaneAtAirport = planeID => {
    for (let i in this.parkedPlanes) {
      if (this.parkedPlanes[i].getId() === planeID) {
        return true;
      }
    }
    return false;
  };

}

module.exports = Airport;
