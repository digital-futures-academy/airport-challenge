class Airport {                               // Airport class created.
  constructor(defaultCapacity = 3) {          //give Airport a default capacity of 3
    this.planes = [];                         //create an empty array
    this.defaultCapacity = defaultCapacity;
  }

  landed(plane) {                             // create an add function(landed) and value of plane and push that to the empty array of planes.
    this.planes.push(plane);
    return this.planes;                       // return the value
  }

  isFull() {
    return this.planes.length >=
      this.defaultCapacity;                   //  isFull function, check if planes.lenth array is more than or  equal to the
  }                                           //  default capacity of airport and returns it

}

module.exports = Airport;                     //export module to be used in other files
