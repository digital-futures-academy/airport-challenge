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

  takeOff(plane){   
    const takeOffPlane = this.planes.splice(this.planes.indexOf(plane),1); 

    return `Plane ${takeOffPlane} has taken off. There are now ${this.planes.length} planes.` 


  }

}

module.exports = Airport;
