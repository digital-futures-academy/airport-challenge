Airport = require('./airport.js')

class Airplane {
  status = "";

  static hasLanded() {
    this.status = "landed"
  }

  hasTakenOff() {
    this.status = "taken off"
  }

}

module.exports = Airplane
//let newAirplane = new Airplane
//let newAirport = new Airport

//newAirport.land(newAirplane)
