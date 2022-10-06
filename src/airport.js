const Weather = require("../src/weather.js")

class Airport {
  constructor(planesAtAirport = [], capacity = 0) {
    this.planesAtAirport = planesAtAirport;
    this.capacity = capacity;
  }

  landPlane(plane) {
    if (!this.isPlaneAtAirport(plane) && !this.isFull()) {
      this.planesAtAirport.push(plane)
      return this.planesAtAirport;
    }

  }

  takeOffPlane(plane) {
    if (this.isPlaneAtAirport(plane) === true) {
      let index = this.planesAtAirport.indexOf(plane);
      this.planesAtAirport.splice(index, 1);
      return "Plane has taken off & no longer in the airport";
    } else {
      return "Error, plane is not in the airport";
    }
  }

  setCapacity(newCapacity) {
    return this.capacity = newCapacity;
  }

  isFull() {
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
