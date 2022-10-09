class Airport {

  airport;
  capacity;
  


  constructor(capacity = 0) {
    this.airport = [];
    this.capacity = capacity;
  
  }
  
  addPlane(plane) {
    if (this.isFull()) {
      console.log('airport is full')
      return true;
    }
    else if (this.airport.includes(plane)) {
      console.log("plane already in airport")
      return true;
     }
    
    else {
      this.airport.push(plane)
    }
    
   }
  
  isFull() {
    return this.airport.length >= this.capacity;
  }
  
  increaseCapacity(num) {
    this.capacity += num
    console.log(this.capacity);
  }

   removePlane(plane) {
     if (!this.airport.includes(plane)) {
       console.log('plane not in airport')
       return true;
     }
     else {
       this.airport.pop(plane);
       return true;
     }
    
   }


//   checkAirport(plane) {
//     return this.airport.includes(plane)
     
   
//   }

}

 module.exports = Airport;


