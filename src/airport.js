class Airport {
  plane = []; 
  constructor(capacity) {
    this.planes = [];
    this.capacity = capacity;
    capacity = 3;

  }
  land(plane) {
    if (this.planes.length >= this.capacity) {
      console.log("sorry airport is full");
    } else if (this.planes.includes(plane)) {
      return "Plane has already landed at the airport"
    }
    else {
      this.planes.push(plane);
      return this.planes;
    }
  }

  takeOff(plane) {
    if (this.planes.includes(plane) === false) {
      console.log("plane is not here!")
      return false;
    } else {
      let index = this.planes.indexOf(plane)
      this.planes.splice(index, 1);
      return this.planes;
    }

  }
}

module.exports = Airport;
