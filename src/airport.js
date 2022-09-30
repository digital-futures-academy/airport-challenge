class Airport {
  // here's a starting point for you
  landedPlanes;
  capacity;

  constructor(capacity = 0) {
    this.capacity = capacity;
    this.landedPlanes = [];
  }

  landPlane = (plane) => {
    if (!this.isFull()) {
      this.landedPlanes.push(plane);
    }
  }

  takeOff = (plane) => {
    let index = this.landedPlanes.indexOf(plane);
    this.landedPlanes.splice(index, 1);
  }

  isFull = () => {
    return this.landedPlanes.length >= this.capacity;
  }
};

module.exports = {
  Airport
};
