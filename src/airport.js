//const Plane = require("./plane");

class Airport {
  // here's a starting point for you
  constructor(){
    this.planes = [];
    // Default capacity is 20. 
    this.capacity = 20; 
  }

  land (plane) {   
    if (plane.flyingStatus === 'landed'){
      return "Sorry, that plane is already landed."
    } else if (this.planes.length < this.capacity) {
      plane.flyingStatus = 'landed';
      this.planes.push(plane);
      return "The plane has landed."
    } else {
      return "Sorry, unable to land, the aiport is full."
    }
  }

  changeCapacity(newCapacity){
    this.capacity = newCapacity; 
  }

  takeOff(plane){  
      const takeOffPlane = this.planes[this.planes.indexOf(plane)];

      this.planes.splice(this.planes.indexOf(plane), 1);

      console.log(takeOffPlane)
      console.log(takeOffPlane.name)

      return `Plane ${takeOffPlane.name} has taken off. There are now ${this.planes.length} planes.`

    }
    
  }

module.exports = Airport;
