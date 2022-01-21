class Airport {

  capacity;
  landed;
   

  constructor(capacity = 5) {                         //Here I set the capacity of the Airport to 5. 
    this.capacity = capacity;
    this.landed = [];                                 //.landed represents an array which would hold the planes currently at the Airport. 

  };

  landPlane(plane1) {
    return this.landed.push(plane1)                   //In order to land the plane, I use the .push method to add the plane to the landed array. 
  };

  isFull() {
    return this.landed.length <= this.capacity;       //To check whether there is capacity, I use .length on the landed array to see whether this exceeds the airport capacity 
  };

  landWhenFull() {
    if (this.landed.length >= this.capacity) {        //I use .length on the landed array to see whether this is below the airport capacity
      return new Error(`Airport is at full capacity (${this.landed.length})`)
    }
  };

  departAndConfirm(plane3) {                   
    const index = this.landed.findIndex(element => plane3 === element)
    if (index !== -1) {                      
      this.landed.splice(index, 1)                   //I find the index of the plane, I make sure its not -1 and use the splice method to remove the plane from the landed array
    }
  };

  preventLanding(plane4) {
    if (this.landed.includes(plane4)) {             //I use the .includes operator to see whether the plane is already in the landed array and return an error if it is. 
      return new Error(`The Plane has already landed`)
    }
  };

};

module.exports = Airport;
