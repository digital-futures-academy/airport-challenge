class Airport {
  // here's a starting point for you
  planesAtAirport = [];
  capacity = 5;

  isPlaneAtAirport(plane) {
    return this.planesAtAirport.includes(plane);
  }

  landPlane(plane) {
    if (this.isAirportFull()) {
      return "airport is full";
    }
    if (this.isPlaneAtAirport(plane)) {
      return "plane is already at the airport";
    } else {
      this.planesAtAirport.push(plane);
      return "plane has landed";
    }

  }

  takeoffPlane(plane) {
    if (this.isPlaneAtAirport(plane)) {
      this.planesAtAirport.pop(plane);
      return "plane has taken off";
    }

  }

  setCapacity(newCapacity) {
    this.capacity = newCapacity;
  }

  //https://www.geeksforgeeks.org/different-ways-of-writing-functions-in-javascipt/

  isAirportFull() {
    return this.planesAtAirport.length >= this.capacity;
  };

}

module.exports = Airport;

