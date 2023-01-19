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
      this.slotsOccupied.push(plane = new Plane)
    }
  }

  removePlane = () => {
    const planesAtAirport = this.slotsOccupied.pop()
  }

  planeAtAirport = () => {
    const isItHere = this.slotsOccupied.find(planes => planes === 'Plane');
  };


  //const isThePlaneHere = this.slotsOccupied.findIndex(this.slotsOccupied === 'IAmAPlane')
  //if (this.slotsOccupied.findMatch = '') {
  //return
  //}

}



const airport = new Airport
const plane = new Plane

airport.addPlane()
console.log(airport.slotsOccupied)
airport.planeAtAirport()
console.log(airport.isItHere)
console.log(airport.slotsOccupied.find(plane => plane = 'sausage') ? 'True' : 'False')

module.exports = Airport;
