
class Airport {
  airportPlanes;
  capacity;
  constructor (typeOfTransport, capacity=20, airportPlanes=[]){
    this.capacity=capacity;
    this.airportPlanes = airportPlanes
    this.typeOfTransport = typeOfTransport
  }

  landPlane(plane){
    
    let indexPlaneRemove= this.airportPlanes.findIndex(element => element.id === plane.id)
    if ( plane.constructor.name == this.typeOfTransport.name && this.airportPlanes.length< this.capacity &&indexPlaneRemove===-1 ) {
      this.airportPlanes.push(plane)
    return `${plane.id}, you are free to land, I repeat, you are free to land. Over.`}
    else {return "You cannot land"}
  }

  takeOff(plane){
    let indexPlaneRemove= this.airportPlanes.findIndex(element => element.id === plane.id)
    if ( plane.constructor.name == this.typeOfTransport.name && indexPlaneRemove>-1) {
    this.airportPlanes.splice(indexPlaneRemove, 1)
   
    return `${plane.id}, you can take off`
  }    else {return "You cannot take off"}
}
  checkTakeOff(plane){
    let indexPlaneRemove= this.airportPlanes.findIndex(element => element.id === plane.id)
    if (indexPlaneRemove===-1){
      return `${plane.id} has successfully taken off`
    }
    else {return `${plane.id} is still in the airport`}
    
    
  }

  isAtCapacity(){
    if (this.airportPlanes.length>= this.capacity){
      return `You cannot land, Airport is at capacity`
    }
  }

  overrideCapacity(newCapacity){
    this.capacity=newCapacity
  }

}

module.exports = Airport;
