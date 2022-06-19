class Airport {
  #Capacity = 150; //# = private property
  #Capacity1 = 200


  planesAtAirport = [];
  planeLand(plane) {
    this.planesAtAirport.push(plane) //this: directing to (specific) planesAtAirport.
    console.log(`Plane ${plane.id} has landed.`)
  }

  changeCapacity(newCapacityNumber) { //give function parameter so user can assign any value to it
    this.#Capacity = newCapacityNumber;
    console.log(`Current Airport capacity is ${this.#Capacity}`)
    return this.#Capacity // returning capacity number because the object property has changed.

  }

  preventLanding(fullCapacity) {
    this.#Capacity1 = fullCapacity;
    console.log(`Airport capacity is ${this.#Capacity1}, Plane will land.`)
    return this.#Capacity1
  }
  //idk if this makes sense but my aim was to test that the plane will not land. Plane would not land if airport capacity was exceeded.


  /*preventLand(noCapacity) {
    this.planesAtAirport.length(plane) //this: directing to (specific) planesAtAirport.
    if (this.planesAtAirport.length > this.#Capacity) {
      result = `Plane no land`;
    }
    else {
      result = `Plane yes land`;
    }
    return result;
    */
  // I tried to produce a code for user story 3 that would compare the capacity of the airport against user entered capacity. I just couldn't wrap my head around it at all.


  planesAtAirport = [];
  planeFly(plane) {
    this.planesAtAirport.pop(plane) //this: directing to (specific) planesAtAirport.
    console.log(`Plane ${plane.id} has taken off.`)
  }

  /*Code for US:5
  
  - I believe the code for this user story involves an if else statement. perhaps two blocks of if else statements
  - The first would be questioning IF the plane is not at the airport = preventAsk(), ELSE allowAsk()??
  - The second would be questioning IF the plane is landed = preventAsk(), ELSE allowAsk??

  
  */

}

module.exports = Airport;
