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

  removePlane = () => {
    const planesAtAirport = this.slotsOccupied.indexOf()
    if (planesAtAirport > -1) {
      this.slotsOccupied.splice(planesAtAirport, 1)
    }
  }

}



module.exports = Airport;
