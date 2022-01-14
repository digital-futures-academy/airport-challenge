class Airport {
  constructor(capacity) {
    this.grounded = [];
    this.capacity = capacity;
  }

  landing (plane) {        
    if (this.atCapacity()){           
      return `Cannot land ${plane}. We are at capacity`
    } else {                                
      this.grounded.push(plane);
    }
  }

  overrideCapacity (extra) { 
    if(extra > 0){
        this.capacity += extra;
    }
    return this.capacity
  }

  atCapacity() {
    return this.grounded.length === this.capacity
  }

}
module.exports = Airport;
