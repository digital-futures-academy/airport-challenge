class Airport {
  planeList = [];

  constructor(airportSize = 2) {
    this.airportSize = airportSize;
  }

  addPlane(plane) {
    this.planeList.push(plane);
    return this.planeList;
  }

  setAirportSize(input, integer) {
    input += integer;
    return input;
  }

  isFull() {
    return this.planeList.length === this.airportSize;
  }

  removePlane() {
    this.planeList.pop();
    return this.planeList;
  }

  isLanded(landed) {
    return landed === true;
  }

  isFlying(flying) {
    return flying === true;
  }

  isAtAirport(landed, atAirport) {
    return (landed === true && atAirport === true);
  }

}

module.exports = Airport;