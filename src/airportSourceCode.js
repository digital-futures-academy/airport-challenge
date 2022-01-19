class Airport {
 
  constructor (airStatus){
   this.airStatus = airStatus
  }

  landPlane(airStatus){
    if (airStatus === true) {
    return true 
    } else {
    return false 
    }
  }







}

module.exports = Airport;
