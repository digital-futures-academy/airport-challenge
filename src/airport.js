class Airport {
  //declare a private variable to hold the capacity of the airport.
  #capacity;

  //Constructor - sets up #capacity variable to a default value unless a value is provided as an argument into the constructor.
  constructor(capacity = 5) {
    this.#capacity = capacity;
  }

  // instructToLand pseudo logic:
  // will accept a plane as an argument
  // will call land() function of the plane.
  // No return value specified as required in the domain model for requirement 1.
  instructToLand(plane) {
    plane.land();
  }

  //getCapacity() - act as the getter of #capacity by returning #capacity.
  getCapacity() {
    return this.#capacity;
  }
}

module.exports = Airport;

