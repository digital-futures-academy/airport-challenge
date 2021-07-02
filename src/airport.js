class Airport {
  constructor(capacity = 5){
    this.plane = [];
    this.capacity = capacity;
  }

  land(plane){
     this.plane.push(plane);
     return plane;
  }
}

module.exports = Airport;
