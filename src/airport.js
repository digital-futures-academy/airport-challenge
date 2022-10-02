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
    if (this.landedPlanes.length === this.capacity) return true
  }

}
module.exports = Airport;
