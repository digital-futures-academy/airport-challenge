const Plane = require(`./plane`);

class Airport {
  constructor(capacity = 0) {
    this.capacity = capacity;
    this.airportPlanes = [''];
  }

  landPlane = plane => {
    if (plane instanceof Plane) this.airportPlanes.push(plane);
    return console.log(plane)
  
}

    
  isFull() {
    return this.airportPlanes.length >= this.capacity
  }

  TakeOff = plane => {
    const indexOfPlaneInAirportPlanes = this.airportPlanes.findIndex(airportPlane => airportPlane.id === Plane.id);

    if (indexOfPlaneInAirportPlanes > -1) {
      this.airportPlanes.splice(indexOfPlaneInAirportPlanes, 1);
    } return console.log("Plane is no longer at the airport!")
  }

  isLanded = plane => {
    if (this.airportPlanes.includes(Plane) & this.landPlane(Plane)) {
      this.airportPlanes.pop(Plane)
    }
    }
  
  

}
  


module.exports =
  Airport;

 