const Plane = require("./Plane");

class Airport {

  planesAtAirport = [];

  landPlane = plane => {
    if (plane instanceof Plane) {
      this.planesAtAirport.push(plane)
    }
  };

}

module.exports = Airport;
