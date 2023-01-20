const Plane = require("./Plane");
const Weather = require('./Weather');

class Airport {
  // here's a starting point for you
  landedList = []
  airportCapacity;

  constructor(airportCapacity = 1) {
    this.airportCapacity = airportCapacity
  }
  
  addPlane(plane , weather = new Weather('sunny')) {
    if (plane instanceof Plane && weather !== 'stormy') { this.landedList.push(plane) }
    else if (weather === 'stormy'){return false}
  }

  //capacity 
  varyCapacity(capacity) {
    this.airportCapacity = capacity
  }

  isFullCheck() {
    if (this.landedList.length === this.airportCapacity){ return true}
  }

  removePlane(plane , weather = new Weather('sunny')) {
    const myId = this.landedList.findIndex(item => item.id === plane.id)
    if (myId > -1 && weather !== 'stormy') { this.landedList.splice(myId, 1) }
    else if (myId > -1 || weather === 'stormy') { return false }
  }

  checkList(plane) {
    if(this.landedList.includes(plane) === false){ return true }
  }

  isPlaneThere(plane) {

    if (this.landedList.includes(plane) === true ) {
      return true
    } else{ return false}
  } 
}

module.exports = Airport;
