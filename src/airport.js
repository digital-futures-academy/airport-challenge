class Airport {

  capacity;
  planesAtAirport;

  constructor(newCapacity = 0) {
    this.planesAtAirport = [];
    this.capacity = newCapacity;
  }

  landPlane(plane) {
    if (this.planesAtAirport.length >= this.capacity) {
      return "airport is full";
    } else {
      this.planesAtAirport.push(plane);
      return "the plane has landed";
    }
  }


  takeOffPlane(plane) {
    if (this.planesAtAirport.pop(plane)) {
      return "the plane has taken off";
    }
  }

  getCapacity() {
    return this.capacity;
  }

  setCapacity(newCapacity) {
    this.capacity = newCapacity;
  }

  isPlaneAtAirport(plane) {
    if (this.planesAtAirport.includes(plane)) {
      return true;
    } else {
      return false;
    }
  }

}

module.exports = Airport;
