const Plane = require ("../src/plane.js")

class Airport {
  airportPlanes = [];

  constructor (capacity = 50){
    this.capacity=capacity;

  }

  landPlane(plane){
    if (plane instanceof Plane) {
    return `${plane.id}, you are free to land, I repeat, you are free to land. Over.`}
    else {return "You are not a plane, you cannot land"}
  }

}

module.exports = Airport;
