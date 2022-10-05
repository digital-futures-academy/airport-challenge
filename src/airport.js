class Airport {
  constructor(capacity = 0) {
    this.planesAtAirport = [];
    this.capacity = capacity;
  }

  landPlane(plane) {
    this.planesAtAirport.push(plane)
    return this.planesAtAirport;
  }

  takeOffPlane(plane) {
    if (this.isPlaneAtAirport() === true) {
      let index = this.planesAtAirport.indexOf(plane);
      this.planesAtAirport.splice(index, 1);
      return this.planesAtAirport;
    } else {
      return "Error, plane is not in the airport";
    }
  }

  setCapacity(newCapacity) {
    return this.capacity = newCapacity;
  }

  isFull(plane) {
    if (this.planesAtAirport.length >= this.capacity) {
      return "Sorry, airport is full"
    }
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
