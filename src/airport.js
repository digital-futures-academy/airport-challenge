const Plane = require("./Plane");

class Airport {
  // here's a starting point for you
  planesInAirport = [];
  #weather;

  constructor(weather, capacity = 3) {
    this.#weather = weather;
    // if the overridden value is not a number, by default the value is 10;
    // else it will be set to the given number
    if (typeof capacity !== "number") {
      this.capacity = 3;
    } else {
      this.capacity = capacity;
    }
  }

  getAirportWeather = () => {
    return this.#weather.getWeather();
  };

  // To land, check the weather first, must be `Sunny`.
  // Then check if plane exists in the airport.
  // If it doesnt exist, only then add it to the airport array.
  landPlane = (plane) => {
    if (this.getAirportWeather() === `Stormy`) {
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

  // Find the index of the plane in the airport, then check the weather in the airport.
  // Only lets the plane takeOff if plane index is found and the weather is `Sunny`.
  takeOffPlane = (planeID) => {
    if (this.planesInAirport.findIndex((plane) => plane.id === planeID) != -1) {
      if (this.getAirportWeather() == `Stormy`) {
        return `Stormy Weather, unable to take off!`;
      } else {
        this.planesInAirport.splice(
          this.planesInAirport.findIndex((plane) => plane.id === planeID),
          1
        );
      }
    } else {
      return `Plane does not exist in this airport.`;
    }
  };

  doesPlaneExist = (plane) => {
    return this.planesInAirport.includes(plane);
  };
}

module.exports = Airport;
