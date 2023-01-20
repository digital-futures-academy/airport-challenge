const Plane = require('./plane');

class Airport {
  slotsOccupied = [];

  addPlane = plane => {
    const checkItsHere = this.slotsOccupied.findIndex(here => here?.tailNumber === plane.tailNumber);
    if (checkItsHere < 0) {
      return this.slotsOccupied.push(plane);
    }

  }

  removePlane = plane => {

    const isItHere = this.slotsOccupied.findIndex(occupied => occupied.tailNumber === plane.tailNumber);

    if (isItHere > -1) {
      this.slotsOccupied.splice(isItHere, 1);
    }
  }

  setLength = () => {
    const arrayLength = this.slotsOccupied.length;
    if (arrayLength < 1) {
      return this.slotsOccupied.length = this.slotsOccupied.push(new Plane('OtherPlanes')) * 10;
    }
  }

}

module.exports = Airport;
