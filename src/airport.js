class Airport {

  // instructToLand pseudo logic:
  // will accept a plane as an argument
  // will call land() function of the plane.
  // No return value specified as required in the domain model for requirement 1.
  instructToLand(plane) {
    plane.land();
  }


}


module.exports = Airport;

