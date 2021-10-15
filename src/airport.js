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

  takeOff(plane) {
    let index = this.parkingLot.indexOf(plane);
    if (index === -1) {
      return "Not possible: Plane is not at airport";
    }
    this.parkingLot.splice(index, 1);
    return this.parkingLot;
  }
}

module.exports = Airport;
