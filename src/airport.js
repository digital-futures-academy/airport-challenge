class Airport {                                   //Defines class
  
  constructor(capacity, weather, grounded) {      //Can set capacity of airport, weather condition
    
    this.grounded = grounded || [];               //Array of planes that have landed
    this.capacity = capacity || 10;               //Capactiy of the airport is 
    this.index;                       //index referenced in numerous different functions, best to initialise in the constructor
    this.weather = weather || (Math.random() - 0.1);      //Negative whether values are poor weather not suitable for landing etc
  
  }

  landing (plane) {        
    if (this.atCapacity()){               //Checks whether there is space for the plane on the runway
      return `Cannot land ${plane}. We are at capacity`
    } else if (this.onRunway(plane)) {          //Checks whether the plan is already on the run way
      return `${plane} has already landed`
    } else if (this.weather < 0) {              //Checks weather
      return `${plane} cannot land due to adverse weather`
    } else {                                
      this.grounded.push(plane);              //Adds planes to the grounded list
      return `${plane} has successfully landed`
    }
  }

  overrideCapacity (extra) { 
    if(extra > -this.capacity){        //cannot have negative capacity                 
        this.capacity += extra;
    }
    return this.capacity
  }

  atCapacity() {                                    //Checks if the airport is full
    return this.grounded.length === this.capacity 
  }

  takeOff (plane) {    
    if (!this.onRunway(plane)){                                   //Checks whether the plane is eligible for take off
      return `${plane} is not at the airport and cannot takeoff`
    } else if (this.weather < 0) {                                //Checks the weather
      return `${plane} cannot start takeoff due to adverse weather`
    } else {                      
      this.grounded.splice(this.index,1);                         //Removes plane from grounded list
      return `${plane} has taken off`      
    }                       
  }

  onRunway (plane) {
    this.index = this.grounded.indexOf(plane);     //Finds position at airport of a plane
    return this.index !== -1
  }

  getRunway () {
    if (this.grounded[0]){            //Checks that there are planes on the runway
      return this.grounded
    } else {
      return `Airport is empty`  
    }
  }

}

module.exports = Airport;

// let airport = new Airport( undefined, 1, undefined);

// console.log(airport)