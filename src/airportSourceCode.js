class Airport {
 
  constructor (planeAirStatus, airportCapacity = 0){
   this.airStatus = planeAirStatus
   this.airportCapacity = airportCapacity
  }

  landPlane(planeAirStatus){
    if (planeAirStatus === true) {
    return true 
    } else {
    return false 
    }
  }

  changeCapacity(airportCapacity){
   let newCapacity = airportCapacity
    return newCapacity;
  }


}

module.exports = Airport;
