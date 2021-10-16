class Airport {
  // here's a starting point for you
  parkingLot;
  capacity;
  randomNum;
  weather;

  constructor(newCapacity = 5) {
    this.parkingLot = [];
    this.capacity = newCapacity;
    this.randomNum = Math.round(Math.random());
    this.weather = ["sunny", "stormy"][this.randomNum];
  }

  landPlane(plane) {
    if (this.isFull()) {
      return `${plane} is unable to land: Airport capacity is full`;
    }
    if (this.parkingLot.includes(plane)) {
      return `Not possible: ${plane} is at airport`;
    }
    if (this.weather === "stormy") {
      return this.parkingLot;
    }
    this.parkingLot.push(plane);
    return `${plane}, please get ready for landing!`;
  }

  isFull() {
    return this.parkingLot.length === this.capacity;
  }

  takeOff(plane) {
    let index = this.parkingLot.indexOf(plane);
    if (index === -1) {
      return `Not possible: ${plane} is not at airport`;
    }
    if (this.weather === "stormy") {
      return this.parkingLot;
    }
    this.parkingLot.splice(index, 1);
    return `${plane}, please get ready for takeoff!`;
  }
}

module.exports = Airport;
