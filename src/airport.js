class Airport {                               // Airport class created.
  constructor(defaultCapacity = 3) {          //give Airport a default capacity of 3
    this.planes = [];                         //create an empty array
    this.defaultCapacity = defaultCapacity;
  }

  landed(plane) {                             // create an add function(landed) and value of plane and push that to the empty array of planes.
    this.planes.push(plane);
    return this.planes;                       // return the value
  }



}

module.exports = Airport;                     //export module to be used in other files
