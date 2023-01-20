class Airport {

  airportCapacity = 5;

  landPlane(plane) {
    if (this.checkPlaneValid(plane) === undefined) {
      if (this.checkPlaneFlying(plane) === true) {
        plane.land();
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
      if (input < 0 || typeof input !== `integer`) {
        throw new Error(`invalid capacity entered`);
      }
    } catch (error) {
      return error.message;
    }
    this.airportCapacity = input;
  }
}

module.exports = Airport;
