const Plane = require(`./Plane`);

class Airport {
  airportPlanes = [];

  addPlane = plane => {
    if (plane instanceof Plane) this.airportPlanes.push(plane);
  };
  

}

module.exports = Airport;
