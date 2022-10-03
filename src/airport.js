class Airport {

  constructor() {
    this.arrPlanes = [];
    this.capacity = 3;
  }

  land(plane) {
    if (this.isCapacityFull()) {
      return console.log("Sorry, airport is full.")
    } else {
      this.arrPlanes.push(plane);
      return console.log(`${plane} cleared for landing!`);
    }
  }

  setCapacity(newCapacity) {
    this.capacity = newCapacity;
    return this.capacity;
  }

  isCapacityFull() {
    if (this.arrPlanes.length >= this.capacity) {
      return true;
    }
  }

  takeOff(planeToTakeOff) {
    let planeIndex = this.arrPlanes.indexOf(planeToTakeOff);
    this.arrPlanes.splice(planeIndex, 1);
    return console.log(`${planeToTakeOff} cleared for take off`);
  }

}

module.exports = Airport;
