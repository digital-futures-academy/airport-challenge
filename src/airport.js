const Plane = require(`./Plane.js`);

class Airport {
  airportCapacity = 10;
  airportPlanes = [];

  landPlane = plane => {
    if (plane instanceof Plane) this.airportPlanes.push(plane);
  };
}

module.exports = Airport;
