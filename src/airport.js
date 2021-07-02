class Airport {
  constructor(){
    this.plane = [];
  }

  land(plane){
     this.plane.push(plane);
     return plane;
  }
}

module.exports = Airport;
