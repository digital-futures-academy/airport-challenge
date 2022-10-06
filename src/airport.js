class Airport {

  airport;
  capacity;
  


  constructor(capacity = 0) {
    this.airport = [];
    this.capacity = capacity;
  
  }
  addPlane(plane) {
    if (this.isFull()) {
      return 'Airport full'
    }
     else if (this.airport.includes(plane)) {
       return 'plane already in airport'
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
//     if (!this.airport.includes(plane)) {
//       return 'plane not in airport'
//     }
//     else {
       this.airport.pop(plane);
       return true;
//     }
    
   }


//   checkAirport(plane) {
//     return this.airport.includes(plane)
     
   
//   }

}

 module.exports = Airport;


