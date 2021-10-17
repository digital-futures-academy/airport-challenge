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

  takeOff(plane) {

    this.planes.pop(plane);                   // return the array
    return this.planes;
  }
  hasLanded() {
    if (this.planes.includes('Airbus A350')) {
      return "Sorry, plane is already at airport"
    } else {
      this.planes.push('Airbus A350');
      return this.planes;
    }
  }
  hasTookOff() {
    if (this.planes.includes('Airbus A350')) {
      return "Sorry, plane has already departed"
    } else {
      this.planes.pop('Airbus A350');
      return this.planes;
    }
  }
}

module.exports = Airport;                     //export module to be used in other files
