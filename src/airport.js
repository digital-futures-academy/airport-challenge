class Airport {
  // here's a starting point for you
  constructor(maxCapacity = 500) {
    this.maxCapacity = maxCapacity;
    this.currentCapacity = 0;
    this.planes = [];
  }

  landPlane(plane) {
    if (!this.checkIfFull()) {
      this.planes.push(plane);
    }
  }

  overrideCapacity(newCapacity) {
    this.maxCapacity = newCapacity;
  }

  setCurrentCapacity(currentCapacity) {
    this.currentCapacity = currentCapacity;
  }

  checkIfFull() {
    if (this.currentCapacity === this.maxCapacity) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Airport;
