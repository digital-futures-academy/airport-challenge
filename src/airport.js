
class Airport {
  
  constructor (typeOfTransport, capacity=20, airportPlanes=[]){
    this.capacity=capacity;
    this.airportPlanes = airportPlanes
    this.typeOfTransport = typeOfTransport
  }

  landPlane(plane){
    if ( plane.constructor.name == this.typeOfTransport.constructor.name) {
    return `${plane.id}, you are free to land, I repeat, you are free to land. Over.`}
    else {return "You are not a plane, you cannot land"}
  }

  takeOff(plane){
    return `${plane.id}, you can take off`
  }

  isAtCapacity(){
    if (this.airportPlanes.length>= this.capacity){
      return `You cannot land, Airport is at capacity`
    }


  }

}

module.exports = Airport;
