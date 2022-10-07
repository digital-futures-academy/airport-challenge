'use strict';

class Airport {
  capacity = 10;
  planeArray = [];
  landPlane = function (plane) {
    if (this.capacity > this.planeArray.length) {
      this.planeArray.push(plane);
      return `Flight ${plane.id} has landed. Remaining capacity: ${
        this.capacity - this.planeArray.length
      }`;
    }
  };
  setCapacity = function (newCapacity) {
    this.capacity = newCapacity;
  };
  capacityReached = function () {
    if (this.capacity === this.planeArray.length) {
      return `Airport capacity has been reached.`;
    }
  };
  initTakeoff = function (plane) {
    return `Flight ${plane.id} has departed. Remaining capacity: ${
      this.capacity - this.planeArray.length
    }`;
  };
}

module.exports = Airport;
