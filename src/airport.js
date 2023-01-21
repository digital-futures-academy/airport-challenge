const Plane = require(`./Plane.js`);

class Airport {
  airportPlanes = [];

  landPlane = plane => {
    if (plane instanceof Plane) this.airportPlanes.push(plane);
  };
}

module.exports = Airport;
