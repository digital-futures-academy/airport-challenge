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

  allowTakeOff(plane) {
    if (this.checkIfLanded()) {
      let index = this.planes.indexOf(plane);
      this.planes.splice(index, 1);
    } else {
      console.log('Plane isn\'t at this airport');
    }
  }

  checkIfLanded(plane) {
    let index = this.planes.indexOf(plane);
    return index === -1 ? false : true;
  }
}

module.exports = Airport;
