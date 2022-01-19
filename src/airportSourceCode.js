class Airport {
 
  constructor (planeAirStatus, airportMaxCapacity = 0){
   this.airStatus = planeAirStatus
   this.airportMaxCapacity = airportMaxCapacity
  }

  landPlane(planeAirStatus){
    if (planeAirStatus) {
    return planeAirStatus 
    } 
    return planeAirStatus 
  }

  changeCapacity(airportMaxCapacity){
   let newCapacity = airportMaxCapacity;
  this.airportMaxCapacity = newCapacity
    return newCapacity;
  }

  preventLanding(){

  }


}

module.exports = Airport;
