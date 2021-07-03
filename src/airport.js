const Plane = require("./plane");

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
    //console.log(this.planes)
    //console.log(this.planes[0].name)
    //console.log(this.planes[0].flyingStatus);
    //console.log(this.planes);
    //console.log(`The index of the plane in the planes array is ${this.planes.indexOf(plane)}`);

    const takeOffPlane = this.planes[this.planes.indexOf(plane)];

    const check = takeOffPlane instanceof Plane;
    console.log(check);

    this.planes.splice(this.planes.indexOf(plane),1);
  
    //console.log(this.planes)

    //console.log(`takeOffPlane: ${takeOffPlane}`);
    //console.log(`takeOffPlane.name: ${takeOffPlane.name}`);

    //console.log(`Plane ${takeOffPlane.name} has taken off. There are now ${this.planes.length} planes.`)

    return `Plane ${takeOffPlane.name} has taken off. There are now ${this.planes.length} planes.` 


  }

}

module.exports = Airport;
