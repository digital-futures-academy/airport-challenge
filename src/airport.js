'use strict';

class Airport {
  capacity = 10;
  planeArray = [];
  landPlane = function (plane) {
    if (this.capacity > this.planeArray.length) {
      this.planeArray.push(plane);
      return `Flight ${plane.id} has landed.`;
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
}

module.exports = Airport;
