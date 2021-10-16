class Airport {
  // here's a starting point for you
  constructor(maxCapacity = 500) {
    this.maxCapacity = maxCapacity;
    this.currentCapacity = 0;
    this.planes = [];
    Math.random() >= 0.5 ? this.safeWeather = true : this.safeWeather = false;
  }

  landPlane(plane) {
    if (!this.checkIfFull() && !this.checkIfLanded(plane)) {
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
    if (this.checkIfLanded(plane) && this.safeWeather) {
      let index = this.planes.indexOf(plane);
      this.planes.splice(index, 1);
    }
  }

  checkIfLanded(plane) {
    let index = this.planes.indexOf(plane);
    return index === -1 ? false : true;
  }

  setSafeWeather(condition) {
    condition ? this.safeWeather = true : this.safeWeather = false;
  }
}

module.exports = Airport;
