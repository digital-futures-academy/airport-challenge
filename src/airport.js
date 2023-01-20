const Plane = require(`./plane`);
const Weather = require(`./weather`)

class Airport {
  constructor(capacity = 0) {
    this.capacity = capacity;
    this.airportPlanes = [];
  }

  landPlane = plane => {
    if (plane instanceof Plane) {
      this.airportPlanes.push(plane);
  
  
    }
  }
  
  preventLanding = plane => {
    if (this.isFull() && this.airportPlanes.push(plane)) {
      return "The airport is full"
  
    }
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

  alreadyLanded = plane => {
    if (this.airportPlanes.includes(plane)) {
      return true
    } else {
      return false
    }
    
  
  
  


  }
}



  


module.exports =
  Airport;

 