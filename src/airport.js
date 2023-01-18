const Plane = require(`./plane`);

class Airport {
  // here's a starting point for you

  // landedPlanes = [];
  // maximumCap;

  // constructor(capacity = 10, maximumCap) {
  //   this.capacity = capacity;
  //   this.maximumCap = maximumCap;
  // }
  constructor(capacity = 10) {
    this.landedPlanes = [];
    this.capacity = capacity;
  }

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
