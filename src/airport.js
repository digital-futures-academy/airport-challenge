'use strict';
class Airport {
  capacity = 10;
  planesAtAirport = [];

  planeIsAtAirport = function (plane) {
    if (this.planesAtAirport.includes(plane)) {
      return true;
    } else {
      return false;
    }
  };
  landPlane = function (plane) {
    let landedStatus = this.planeIsAtAirport(plane);
    if (this.capacity > this.planesAtAirport.length && landedStatus === false) {
      this.planesAtAirport.push(plane);
      return `Flight ${plane.id} is now landing. Remaining capacity: ${
        this.capacity - this.planesAtAirport.length
      }`;
    }
    if (landedStatus === true) {
      return `Error: Flight ${plane.id} has already landed`;
    }
  };
  setCapacity = function (newCapacity) {
    this.capacity = newCapacity;
  };
  capacityReached = function () {
    if (this.capacity === this.planesAtAirport.length) {
      return `Airport capacity has been reached.`;
    }
  };
  initTakeoff = function (plane) {
    let landedStatus = this.planeIsAtAirport(plane);
    if (landedStatus === true) {
      for (let index = 0; index < this.planesAtAirport.length; index++) {
        this.planesAtAirport.splice(index, 1);
      }
      return `Flight ${plane.id} has departed. Remaining capacity: ${
        this.capacity - this.planesAtAirport.length
      }`;
    }
    if (landedStatus === false) {
      return `Error: Flight ${plane.id} is not at this airport`;
    }
  };
}

module.exports = Airport;
