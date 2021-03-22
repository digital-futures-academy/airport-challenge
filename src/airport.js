Weather = require('./weather.js')
Airplane = require('./airplane-class.js')

class Airport {

  constructor() {
    this.airplaneArr = [];
    this.maxCapacity = 5;
  }

  checkIfFull() {
    if (this.airplaneArr.length === 5) {
      return true
    } else {
      return false
    }
  }

checkIfAtAirport(airplane){
  if (this.airplaneArr.includes(airplane)) {
    return true
  } else {
    return false
  }
}

  land(airplane) {
    if (this.checkIfFull()) {
      return 'airport at full capacity'
    } else {
      if (this.airplaneArr.includes(airplane)) {
        return 'airplane already at airport'
      } else {
        if (Weather.checkIfStormy() === "sunny") {
          this.airplaneArr.push(airplane)
          //Airplane.hasLanded()
          return 'landed'
        }
      }
    }
  }

  takeoff(airplane) {
    if (this.airplaneArr.includes(airplane)) {
      let index = this.airplaneArr.indexOf(airplane)
      this.airplaneArr.splice(index, 1)
      return 'plane taken off'
    } else {
      return 'airplane not at airport'
    }
  }

  changeCapacity(newCapacity) {
    this.maxCapacity = newCapacity
    return this.maxCapacity
  }

}

//let exampleAirport = new Airport()
//console.log(exampleAirport.land("airplane1"))
//console.log(exampleAirport.takeoff("airplane1"))

module.exports = Airport;
