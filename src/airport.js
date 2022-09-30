class Airport {
  constructor() {
    this.capacity = 50; //set initial capacity
    this.landedPlanes = [];//set place for planes to be listed inside

  }
  add(input) {
    this.landedPlanes.push(input);
  }
}

module.exports = Airport;
