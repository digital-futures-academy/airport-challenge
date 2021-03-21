class Airport {
  constructor() {
    this.planeHangar = [];
  }
  landPlane(plane){
    plane.isFlying = false;
    this.planeHangar.push(plane);
    return this.planeHangar;
  }

}

module.exports = Airport;
