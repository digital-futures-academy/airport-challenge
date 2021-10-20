class Airport {

  constructor(airportSize = 2) {
    this.airportSize = airportSize;
    this.planeList = [];
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
    if (landed === true) {
      return true;
    } else {
      return false;
    }
  }

  isFlying(flying) {
    if (flying === true) {
      return true;
    } else {
      return false;
    }
  }

  isAtAirport(landed, atAirport) {
    return (landed === true && atAirport === true);
  }

}

module.exports = Airport;