// Airport Class

const Plane = require(`./plane.js`);

class Airport {

  groundedPlanes = []; //array for planes in the airport

  //functions of airport
  landPlane = plane => this.groundedPlanes.push(plane); // adds the plane to the groundedPlanes array
}

module.exports = Airport;
