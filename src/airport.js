class Airport {
  // here's a starting point for you
  constructor(maxCapacity = 5) {
    this.maxCapacity = maxCapacity
    // we want to make the capacity interchangable so we pass it as a argument in the constructor you can override the capacity number 

    this.plane = []

  }
  land(plane) {
    // insert item into array
    // returns the array

    //if this = this then do this, and add to array only if below the capicity and don't add to array if its above capitcity return string saying its above the capicity)

    if (this.plane.length === this.maxCapacity) {
      return "sorry airport is full"
    } if (this.plane.includes(plane)) {
      return "the plane has already landed"
    }
    else {
      this.plane.push(plane)
      return this.plane
    }

  }

  //As an air traffic controller
  //So I can get passengers on the way to their destination
  //I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
  //takeOff(plane) {
  // for (let i = 0; i < plane.length; i++) {
  //   if (this.plane[i] === this.plane) {
  // this.plane.splice(this.plane)
  // return 'plane can takeoff'

  // else
  // return 'plane cannot takeoff'
  // }
  //}
  takeOff(plane) {
    if (!this.plane.includes(plane)) {
      return "the plane has taken off"
    } else {
      let index = this.plane.indexOf(plane)
      this.plane.splice(index, 1)
      return this.plane
    }
  }
}



module.exports = Airport;
// module not found so import in specRunner.js
// i refactored the land and push arguments into the if statement 
