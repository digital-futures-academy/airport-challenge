class Airport {
  constructor(capacity) {
    this.grounded = [];
    this.capacity = capacity;
    this.index;
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

  takeOff (plane) {    
    this.index = this.grounded.indexOf(plane)                      
    this.grounded.splice(this.index,1);
    return `${plane} has taken off`                             
  }

}
module.exports = Airport;
