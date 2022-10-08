'use strict';
class Airport {
  capacity = 10;
  planesAtAirport = [];

  landPlane = function (plane) {
    if (this.capacity > this.planesAtAirport) {
      this.planesAtAirport.push(plane);
      return `Flight ${plane.id} has landed. Remaining capacity: ${
        this.capacity - this.planesAtAirport.length
      }`;
    }
  };
  planeIsAtAirport = function (planeID) {
    if (this.planesAtAirport.some(el => el.id === planeID)) {
      return true;
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
    let index = this.planesAtAirport.findIndex(plane => plane.id);
    this.planesAtAirport.splice(index, 1);
    return `Flight ${plane.id} has departed. Remaining capacity: ${
      this.capacity - this.planesAtAirport.length
    }`;
  };
}

module.exports = Airport;
