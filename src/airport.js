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
      this.slotsOccupied.push(tailNumber instanceof Plane ? 'PlaneA' : 'PlaneB')
    }
  }

  //addPlane(tailNumber) {
  //if (tailNumber instanceof Plane) this.slotsOccupied.push(tailNumber)
  //}

  removePlane = () => {
    const planesAtAirport = this.slotsOccupied.indexOf(this.tailNumber instanceof Plane)
    if (planesAtAirport > -1) {
      this.slotsOccupied.splice(planesAtAirport, '')
    }
  }

}


module.exports = Airport;
