class Airport {
  // here's a starting point for you
  landedPlanes;
  capacity;

  constructor(capacity = 0) {
    this.capacity = capacity;
    this.landedPlanes = [];
  }

  add = (plane) => {
    this.landedPlanes.push(plane);
  }
};

module.exports = {
  Airport
};
