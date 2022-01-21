class Airport {                                   //Defines class
  constructor(capacity, weather, grounded) {      //Can set capacity of airport, weather condition
    
    this.grounded = grounded || [];               //Array of planes that have landed
    this.capacity = capacity || 10;               //Capactiy of the airport is 
    this.index;
    this.weather = weather || (Math.random() - 0.1);
  }

  landing (plane) {        
    if (this.atCapacity()){           
      return `Cannot land ${plane}. We are at capacity`
    } else if (this.onRunway(plane)) {          //Checks whether the plan is already on the run way
      return `${plane} has already landed`
    } else if (this.weather < 0) {
      return `${plane} cannot land due to adverse weather`
    } else {                                
      this.grounded.push(plane);
      return `${plane} has successfully landed`
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

  getRunway () {
    if (this.grounded[0]){
      return this.grounded
    } else {
      return `Airport is empty`
    }
  }

}

module.exports = Airport;

// let airport = new Airport( undefined, 1, undefined);

// console.log(airport)