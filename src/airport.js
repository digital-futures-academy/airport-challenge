const Plane = require('./plane')

class Airport {

  slotsOccupied = [];

  setLength(slotsOccupied) {
    if (this.slotsOccupied.length < 1) {
      return this.slotsOccupied.length = 10
    }
  }

  addPlane(tailNumber) {
    if (this.slotsOccupied.length === 10) {
      return
    } else {
      this.slotsOccupied.push(tailNumber instanceof Plane)
    }
  }

  /*removePlane = tailNumber => {
    const indexOfPlanesInSlotsOccupied = this.slotsOccupied.findIndex(tailNumber => tailNumber === tailNumber);
    if (indexOfPlanesInSlotsOccupied > -1) {
      this.indexOfPlanesInSlotsOccupied.splice(indexOfPlanesInSlotsOccupied, 1);
    }*/

}

module.exports = Airport;
