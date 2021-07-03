class Airport {
  // here's a starting point for you
  constructor(){
    this.planes = [];
    // Default capacity is 20. 
    this.capacity = 20; 
  }

  land (plane) {
     this.planes.push(plane)
  }

  changeCapacity(newCapacity){
    this.capacity = newCapacity; 
  }

}

module.exports = Airport;
