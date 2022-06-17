class Airport {
  //declare a private variable to hold the capacity of the airport.
  #capacity;
  #inAirport = [];

  //Constructor - sets up #capacity variable to a default value unless a value is provided as an argument into the constructor.
  constructor(capacity = 5) {
    this.#capacity = capacity;
  }


  addToInAirport(plane) {
    this.#inAirport.push(plane);
  }

  // instructToLand pseudo logic:
  // will accept a plane as an argument
  // will call land() function of the plane.
  // No return value specified as required in the domain model for requirement 1.
  instructToLand(plane) {
    plane.land();
    this.addToInAirport(plane);
  }

  //getCapacity() - act as the getter of #capacity by returning #capacity.
  getCapacity() {
    return this.#capacity;
  }

  getInAirport() {
    return this.#inAirport;
  }
}

module.exports = Airport;

