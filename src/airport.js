// Airport Class

const Plane = require(`./plane.js`);

class Airport {

  groundedPlanes = []; //array for planes in the airport
  airportCapacity = 10; // sets the capacity of the airport to 10

  //functions of airport
  landPlane = plane => {
    if (plane instanceof Plane) this.groundedPlanes.push(plane); // adds the plane to the groundedPlanes array
  }
}

module.exports = Airport;
