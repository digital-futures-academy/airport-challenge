const Plane = require ("../src/plane.js")

class Airport {
  airportPlanes = [];
  maxCapacity;

  constructor (capacity = 50, maxCapacity){
    this.capacity=capacity;
    this.maxCapacity=maxCapacity;

  }

  landPlane(plane){
    if (plane instanceof Plane) {
    return `${plane.id}, you are free to land, I repeat, you are free to land. Over.`}
    else {return "You are not a plane, you cannot land"}
  }

  isAtCapacity(){
    if (this.capacity> this.maxCapacity){
      return `You cannot land, Airport is at capacity`
    }


  }

}

module.exports = Airport;
