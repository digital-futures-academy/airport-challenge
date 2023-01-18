const Plane = require('./Plane');

class Airport {
  airportPlanes = [];

  constructor(airportCapacity = 500) {
    this.airportCapacity = airportCapacity;
  }

  addPlane = plane => {

    if (plane instanceof Plane) this.airportPlanes.push(plane)
  }

};

//if(plane instanceof Plane)



module.exports = Airport;
