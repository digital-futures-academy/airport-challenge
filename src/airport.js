const Plane = require(`./plane`);

class Airport {
  // here's a starting point for you
  landedPlanes = [];

  landPlane = plane => {
    if (plane instanceof Plane) {
      this.landedPlanes.push(plane)
    }
  };

  flyPlane = plane => {

    const indexOfPlaneInAiport = this.landedPlanes.findIndex(landedPlane => landedPlane.id === plane.id);

    if (indexOfPlaneInAiport > -1) {
      this.landedPlanes.splice(indexOfPlaneInAiport, 1);
    }
  }

}

module.exports = Airport;
