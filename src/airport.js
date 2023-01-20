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

  isFull = () => {
    return this.capacity === this.landedPlanes.length;
  };


  landPlane = plane => {
    if (plane instanceof Plane && !this.isFull()) {
      //Check if plane is already landed.
      if (this.landedPlanes.find(p => p.id === plane.id)) {
        return false;
      }
      this.landedPlanes.push(plane);
      return true;
    }
    return false;
  };

  flyPlane = plane => {

    const indexOfPlaneInAiport = this.landedPlanes.findIndex(landedPlane => landedPlane.id === plane.id);

    if (indexOfPlaneInAiport > -1) {
      this.landedPlanes.splice(indexOfPlaneInAiport, 1);
      return true;
    }
    return false;
  };

}

module.exports = Airport;
