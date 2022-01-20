class Airport {
 
  constructor (planeAirStatus, airportMaxCapacity = 0, currentCapacity = 1){
   this.airStatus = planeAirStatus;
   this.airportMaxCapacity = airportMaxCapacity;
   this.currentCapacity = currentCapacity
  }

  landPlane(planeAirStatus){
    if (planeAirStatus) {
    return planeAirStatus;
    } 
    return planeAirStatus;
  }

  changeCapacity(airportMaxCapacity){
   let newCapacity = airportMaxCapacity;
  this.airportMaxCapacity = newCapacity;
    return newCapacity;
  }

  preventLanding(planesToLand){
   if (planesToLand.length > this.airportMaxCapacity - this.currentCapacity)
   return new Error (`The airport max capacity has been reached, cannot land plane.`);
   currentCapacity += planesToLand.length
   console.log(`This plane can be landed as the capacity has not yet been reached.`);

  }

  allowTakeOff(airStatus, planesToLand){
    if (airStatus === true){
    throw new Error (`This plane is already in the air, it cannot be departed twice.`);
    } else {
      //let takingOff = this.curentCapacity -= planesToLand.length;
      this.currentCapacity -= planesToLand.length;
      console.log(`Take off completed. The airports current capacity is now: ${this.currentCapacity}`);
      return this.currentCapacity;}
  }



}


module.exports = Airport;
