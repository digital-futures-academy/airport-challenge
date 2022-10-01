class Airport {

  constructor() {
    this.arrPlanes = [];
    this.capacity = 3;
  }

  land(plane) {
    this.arrPlanes.push(plane);
  }

  setCapacity(newCapacity) {
    this.capacity = newCapacity;
    return this.capacity;
  }

}

module.exports = Airport;
