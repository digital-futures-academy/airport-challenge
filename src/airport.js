class Airport {

  capacity;
  planesAtAirport;

  constructor(newCapacity = 0) {
    this.planesAtAirport = [];
    this.capacity = newCapacity;
  }

  landPlane(plane) {
    if (this.isPlaneAtAirport(plane) === true) {
      return "cannot land plane already in the airport";
    } else if (this.planesAtAirport.length >= this.capacity) {
      return "airport is full";
    } else {
      this.planesAtAirport.push(plane);
      return "the plane has landed";
    }
  }

  takeOffPlane(plane) {
    if (this.isPlaneAtAirport(plane) === true) {
      this.planesAtAirport.splice(this.planesAtAirport.indexOf(plane), 1)
      return "the plane has taken off";
    } else {
      return "cannot take off";
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
