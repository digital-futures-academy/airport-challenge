class Airport {                               // Airport class created.
  constructor(defaultCapacity = 3) {          //give Airport a default capacity of 3
    this.planes = [];                         //create an empty array
    this.defaultCapacity = defaultCapacity;
  }

  landed(plane) {                             // create an add function(landed) and value of plane and push that to the empty array
    this.planes.push(plane);
    return this.planes;                       // return the value
  }

  isFull() {                                  //  isFull function, check if planes.lenth array is more than or  equal to the
    return this.planes.length >=              //  default capacity of airport and returns it
      this.defaultCapacity;
  }

  takeOff(plane) {                            // create a remove function(takeOff) and remove plane using .pop 
    this.planes.pop(plane);                   // return the array
    return this.planes;
  }
}

module.exports = Airport;                     //export module to be used in other files
