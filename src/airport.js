class Airport {
  constructor(capacity = 10) {
    this.capacity = capacity;
    this.planeHangar = [];
  }
  landPlane(plane){
    if(this.fullAirport()){
      return 'cannot land plane - aiport is full';
    } else {
    plane.isFlying = false;
    this.planeHangar.push(plane);
    return this.planeHangar;
  }
}
takeOff(plane){
  let planeIndex = this.planeHangar.indexOf(plane);
  this.planeHangar.splice(planeIndex,1);
  plane.isFlying;
  return this.planeHangar;
}
  fullAirport(){
    if(this.capacity === this.planeHangar.length){
      return true 
      } else { 
        return false;
      }
    }
  }


module.exports = Airport;
