class Airport {
  constructor(capacity = 10) {
    this.capacity = capacity;
    this.planeHangar = [];
  }
  landPlane(plane){
    if(this.fullAirport){
      return 'cannot land plane - aiport is full';
    } else {
    plane.isFlying = false;
    this.planeHangar.push(plane);
    return this.planeHangar;
  }
}
  fullAirport(){
    if(capacity === this.planeHangar.length){
      return true 
      } else {
        return false;
      }
    }
}

module.exports = Airport;
