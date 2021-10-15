class Airport {
  // here's a starting point for you
  parkingLot = [];
  capacity;

  constructor(newCapacity = 5) {
    this.capacity = newCapacity;
  }

  landPlane(plane) {
    this.parkingLot.push(plane);
    return this.parkingLot;
  }

  isFull() {
    return this.parkingLot.length === this.capacity;
  }
}

module.exports = Airport;
