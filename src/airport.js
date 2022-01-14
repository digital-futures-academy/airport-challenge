class Airport {
  constructor(capacity) {
    this.grounded = [];
    this.capacity = capacity || 10
  }
  landing (plane) {            
    this.grounded.push(plane);
  }

  overrideCapacity (extra) { 
    if(extra > 0){
        this.capacity += extra;
    }
    return this.capacity
}
}


module.exports = Airport;
