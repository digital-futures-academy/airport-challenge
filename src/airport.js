const Plane = require('./plane');

class Airport {
  slotsOccupied = [];

  addPlane = plane => {
    const arrayLength = this.slotsOccupied.length
    const checkItsHere = this.slotsOccupied.findIndex(here => here?.tailNumber === plane.tailNumber);
    if (arrayLength > 9) {
    } else if (checkItsHere < 0) {
      return this.slotsOccupied.push(plane)
    }
    /*if (checkItsHere < 0) {
      return this.slotsOccupied.push(plane)
    } else if (arrayLength < 1) { this.slotsOccupied.pop() }*/

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

let airport
airport = new Airport

console.log(airport.slotsOccupied.length)

airport.setLength(1)

console.log(airport.slotsOccupied.length)

airport.addPlane(new Plane('IAmAPlane'))

console.log(airport.slotsOccupied.length)