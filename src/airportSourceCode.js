class Airport {
 
  constructor (planeAirStatus, airportMaxCapacity = 0, currentCapacity = 1){
   this.airStatus = planeAirStatus;
   this.airportMaxCapacity = airportMaxCapacity;
   this.currentCapacity = currentCapacity
   this.planesInAirport = []
  }


  landPlane(planeAirStatus){
    if (planeAirStatus) {
      console.log(`The plane is in the air, can request to land.`);
    return planeAirStatus;
    } 
    console.log(`The plane has already landed.`);
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
      this.currentCapacity -= planesToLand.length;
      console.log(`Take off completed. The airports current capacity is now: ${this.currentCapacity}`);
      return this.currentCapacity;} 
  }


  lookForPlane(name){
    if (this.planesInAirport.includes(name)){
      let name = !! true
      console.log(`The plane exists in the airport, landing/takeoff functions are available.`)
      return name
    } else {
      console.log (`The plane is not at the airport, functions unavailable.`);
      let name = !!false
      return name
    }
  }
}


module.exports = Airport;
