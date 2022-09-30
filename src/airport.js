const { Weather } = require("./weather");

class Airport {
  // here's a starting point for you
  landedPlanes;
  capacity;

  constructor(capacity = 0) {
    this.capacity = capacity;
    this.landedPlanes = [];
  }

  landPlane = (plane) => {
    if (!this.isFull() && !plane.isLanded()) {
      this.landedPlanes.push(plane);
      plane.landed = true;
    }
  }

  takeOff = (plane, weather = new Weather()) => {
    if (this.isLanded(plane) && weather.getWeather() !== "stormy") {
      let index = this.landedPlanes.indexOf(plane);
      this.landedPlanes.splice(index, 1);
      plane.landed = false;
    }
  }

  isFull = () => {
    return this.landedPlanes.length >= this.capacity;
  }

  isLanded = (plane) => {
    return this.landedPlanes.includes(plane);
  }
};



module.exports = {
  Airport
};
