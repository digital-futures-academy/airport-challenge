class Airport {

  airportCapacity;
  planesAtAirport = [];
  constructor(airportCapacity = 5) {
    this.airportCapacity = airportCapacity;
  }


  landPlane(plane) {
    if (this.checkPlaneValid(plane) === undefined && this.checkPlaneFlying(plane) === true && this.checkCapacity() === false) {
      plane.land();
    } else {
      return `This plane cannot be landed`;
    }
  }

  checkPlaneValid(plane) {
    try {
      if (typeof plane !== `object`) {
        throw new Error(`This is not a Plane`);
      }
    } catch (error) {
      return error.message;
    }
  }

  checkPlaneFlying(plane) {
    return plane.checkFlying();
  }

  getCapacity() {
    return this.airportCapacity;
  }

  changeCapacity(input) {
    try {
      if (input < 0 || typeof input !== `number`) {
        throw new Error(`invalid capacity entered`);
      }
    } catch (error) {
      return error.message;
    }
    this.airportCapacity = input;
  }

  checkCapacity() {
    if (this.planesAtAirport.length >= this.airportCapacity) {
      return true;
    } else {
      return false;
    }
  }

  takeOffPlane(plane) {
    if (this.checkPlaneValid(plane) === undefined && this.checkPlaneFlying(plane) === false && this.checkForPlane(plane) === true) {
      plane.takeOff();
    } else {
      return `This plane cannot take off`;
    }
  }

  addPlaneToAirport(plane) {
    this.planesAtAirport.push(plane);
  }

  checkForPlane(plane) {
    if (this.planesAtAirport.find(element => element === plane) !== undefined) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Airport;
