class Airport {
  // Should i change the properties to be private?

  constructor(capacity = 3) {
    this.listOfPlanes = [];
    this.capacity = capacity;
  }

  landPlane(plane) {
    if (plane?.id && !this.isFull())
      this.listOfPlanes = [...this.listOfPlanes, plane];
  }

  overrideCapacity(newCapacity) {
    if (newCapacity > 0 && Number.isInteger(newCapacity))
      this.capacity = newCapacity;
  }

  isFull() {
    return this.listOfPlanes.length === this.capacity;
  }
}

export default Airport;
