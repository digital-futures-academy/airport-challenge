class Airport {
  // Should i change the properties to be private?

  constructor() {
    this.listOfPlanes = [];
    this.capacity = 0;
  }

  landPlane(plane) {
    this.listOfPlanes = [...this.listOfPlanes, plane];
  }

  overrideCapacity(newCapacity) {
    this.capacity = newCapacity;
  }
}

export default Airport;
