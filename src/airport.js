class Airport {

  airportCapacity;
  planesAtAirport = [];
  constructor(airportCapacity = 5) {
    this.airportCapacity = airportCapacity
  }


  landPlane(plane) {
    if (this.checkPlaneValid(plane) === undefined) {
      if (this.checkPlaneFlying(plane) === true) {
        if (this.checkCapacity() === false) {
          plane.land();
        } else {
          return `Cannot land plane, Airport is at capacity`
        }

      } else {
        return this.checkPlaneValid(!plane)
      }
    } else {
      return this.checkPlaneValid(plane)
    }
  }

  checkPlaneValid(plane) {
    try {
      if (typeof plane !== `object`) {
        throw new Error(`This plane cannot be landed`);
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
}

module.exports = Airport;
