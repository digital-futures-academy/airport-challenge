const Plane = require(`./plane`);

class Airport {
  constructor(capacity = 0) {
    this.capacity = capacity;
    this.airportPlanes = [''];
  }

  landPlane = plane => {
    if (this.isFull()) {
      return "The airport is full."

    } else if (this.airportPlanes.includes(plane)) {
      return "This plane has already landed."

    } else (plane instanceof Plane)
    this.airportPlanes.push(plane)
    return "Plane has landed!"

  }
 
  isFull() {
    return this.airportPlanes.length >= this.capacity;
  }

  takeOff = plane => {
    if (this.airportPlanes.includes(plane)) {
      let index = this.airportPlanes.indexOf(plane);
      this.airportPlanes.splice(index, 1);
      return this.airportPlanes;

    } else {
      return "This plane is not at the airport"
    }


      
  }
  
}

  


module.exports =
  Airport;

 