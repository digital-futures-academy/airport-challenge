class Airport {
  constructor() {
    this.hanger = [];
    
  }

  landPlane(plane) {
    this.hanger.push(plane);
    return this.hanger;
    
    }
}
      

module.exports = Airport;
