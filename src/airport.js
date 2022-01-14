class Airport {
  constructor(capacity, weather, grounded) {
    this.grounded = grounded || [];
    this.capacity = capacity || 10;
    this.index;
    this.weather = weather || (Math.random() - 0.1) ;
  }

  landing (plane) {        
    if (this.atCapacity()){           
      return `Cannot land ${plane}. We are at capacity`
    } else if (this.onRunway(plane)) {          //Checks whether the plan is already on the run way
      return `${plane} has already landed`
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
    if (!this.onRunway(plane)){                           
      return `${plane} is not at the airport and cannot takeoff`
    } else if (this.weather < 0) {
      return `${plane} cannot start takeoff due to adverse weather`
    } else {                      
      this.grounded.splice(this.index,1);
      return `${plane} has taken off`      
    }                       
  }

  onRunway (plane) {
    this.index = this.grounded.indexOf(plane);     //Finds position at airport of a plane
    return this.index !== -1
  }

}

module.exports = Airport;
