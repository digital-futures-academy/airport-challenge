const Plane = require(`./plane.js`);

class Airport {
  // here's a starting point for you

  constructor(capacity = 0) {
    this.capacity = capacity;
    this.arrivedPlanes= [];
  }
  planesOnGround = plane => {
    if (plane instanceof Plane) {
      this.arrivedPlanes.push(plane);
    }
  }






}

module.exports = Airport;
