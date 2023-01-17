const Plane = require("./Plane");

class Airport {
  // here's a starting point for you
  planesInAirport = [];
  defaultWeather = `Sunny`;

  constructor(capacity = 3) {
    // if the overridden value is not a number, by default the value is 10;
    // else it will be set to the given number
    if (typeof capacity !== "number") {
      this.capacity = 3;
    } else {
      this.capacity = capacity;
    }
  }

  // number generator
  getRandomNumber = () => {
    return Math.floor(Math.random() * 2) + 1;
  };
  getWeather = () => {
    let randomNumber = this.getRandomNumber();
    return randomNumber == 1 ? `Sunny` : `Stormy`;
  };

  landPlane = (plane, weather) => {
    if (weather !== this.defaultWeather) {
      return `Stormy Weather, unable to take off!`;
    } else {
      if (this.doesPlaneExist(plane)) {
        return `Plane already exists in this airport.`;
      } else {
        if (!this.isAirportFull() && plane instanceof Plane)
          this.planesInAirport.push(plane);
        return false;
      }
    }
  };

  isAirportFull = () => {
    return this.planesInAirport.length >= this.capacity;
  };

  setCapacity(newCapacity) {
    if (typeof newCapacity !== "number") return this.capacity;
    this.capacity = newCapacity;
  }

  takeOffPlane = (planeID, weather) => {
    if (weather !== this.defaultWeather) {
      return `Stormy Weather, unable to take off!`;
    } else {
      if (
        this.planesInAirport.findIndex((plane) => plane.id === planeID) != -1
      ) {
        this.planesInAirport.splice(
          this.planesInAirport.findIndex((plane) => plane.id === planeID),
          1
        );
      } else {
        return `Plane does not exist in this airport.`;
      }
    }
  };

  doesPlaneExist = (plane) => {
    return this.planesInAirport.includes(plane);
  };
}

module.exports = Airport;
