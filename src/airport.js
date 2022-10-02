class Airport {
  constructor(capacity = 5) {
    this.capacity = capacity; //set initial capacity
    this.landedPlanes = [];//set place for planes to be listed inside

  }
  add(input) {
    this.landedPlanes.push(input);
  }
  checkID(input) {
    if (input.id === "Plane1") return true
  }
  isAirportFull() {
    if (this.landedPlanes.length >= this.capacity) return true
  }
  OverridableCapacity(planeID) {
    // for test 1 user story 1
    if (this.listOfLandedPlanes.length === 0) {

      this.listOfLandedPlanes.push(planeID);

      console.log(`${planeID} has landed. Current capacity is ${this.landedPlanes.length} out of ${this.capacity}!`);

      return this.landedPlanes.length;
    }
  }
}
module.exports = Airport;
