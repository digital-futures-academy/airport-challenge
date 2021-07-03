class Airport {
  // here's a starting point for you
  constructor(){
    this.planes = [];
    // Default capacity is 20. 
    this.capacity = 20; 
  }

  land (plane) {
    if (this.planes.length < this.capacity) {
      this.planes.push(plane)
      return "The plane has landed."
    }
    else {
      return "Sorry, unable to land, the aiport is full."
    }

     
  }

  changeCapacity(newCapacity){
    this.capacity = newCapacity; 
  }

}

module.exports = Airport;
