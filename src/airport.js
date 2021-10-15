
class Airport {
  // here's a starting point for you
  location;
  capacity;
  currentNoOfPlanes;
  isFull;

  constructor(location = 'Earth', capacity = 1, currentNoOfPlanes = 0, isFull = false) {
    this.location = location;
    this.capacity = capacity;
    this.currentNoOfPlanes = currentNoOfPlanes;
    this.isFull = isFull;
  }

  landPlane(plane) {
    if (!this.isFull) {
      this.currentNoOfPlanes += 1;
    }

    if (this.currentNoOfPlanes <= this.capacity) {
      this.isFull = true;
    }
  }

}

module.exports = Airport;
