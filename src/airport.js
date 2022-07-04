class Airport {
  // here's a starting point for you
  planesAtAirport = [];
  capacity = 5;
 // fullCapacity = 1

  landPlane(plane) {
  this.planesAtAirport.push(plane)
  }
  
  takeoffPlane(plane) {
    this.planesAtAirport.pop(plane)
  }
}

module.exports = Airport ;

