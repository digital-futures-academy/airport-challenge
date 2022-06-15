class Airport {
  landedPlanes = [];
  // To land a plane, I want to add said plane to the array landedPlanes.
  landPlane = inputPlane => {
    this.landedPlanes.push(inputPlane);
    return this.landedPlanes;
  }

}

module.exports = Airport;


