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


  /*addPlane = tailNumber => {
    if (tailNumber instanceof Plane) this.slotsOccupied.push(tailNumber)
  };*/

}

module.exports = Airport;
