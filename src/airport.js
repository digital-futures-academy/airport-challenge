const Weather = require("../src/weather.js");

class Airport {
  constructor(planesAtAirport = [], capacity = 0, weather = new Weather()) {
    this.planesAtAirport = planesAtAirport;
    this.capacity = capacity;
    this.weather = weather;
  }

  landPlane(plane, weather) {
    if (!this.isPlaneAtAirport(plane) && this.weather === "stormy") {
      return "Weather is unsafe to make a landing";
    } else if (!this.isPlaneAtAirport(plane) && !this.isFull()) {
      this.planesAtAirport.push(plane)
      return "Plane has made a landing";;
    }
  }

  takeOffPlane(plane, weather) {
    if (this.isPlaneAtAirport(plane) === true && this.weather === "stormy") {
      return "It is stormy, plane unsafe to take off";
    } else if (this.isPlaneAtAirport(plane) === true) {
      let index = this.planesAtAirport.indexOf(plane);
      this.planesAtAirport.splice(index, 1);
      return "Plane has taken off & no longer in the airport";
    } else {
      return "Error, plane does not exist in the airport";
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

  trackPlane() {
    return this.planesAtAirport.join();
  }

}


module.exports = Airport;
