const Plane = require('./plane')

class Airport {

  slotsOccupied = [];

  setLength(slotsOccupied) {
    if (this.slotsOccupied.length < 1) {
      return this.slotsOccupied.length = 10
    }
  }

  addPlane(plane) {
    if (this.slotsOccupied.length === 10) {
      return
    } else {
      this.slotsOccupied.push(plane = new Plane(plane.tailNumber))
    }
  }

  //addPlane(tailNumber) {
  //if (tailNumber instanceof Plane) this.slotsOccupied.push(tailNumber)
  //}

  removePlane = () => {
    const planesAtAirport = this.slotsOccupied.pop('Plane')
  }

}


module.exports = Airport;
