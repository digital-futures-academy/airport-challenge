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
    if (this.parkingLot.includes(plane)) {
      return "Not possible: Plane is at airport";
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
      return "Not possible: Plane is not at airport";
    }
    if (this.weather === "stormy") {
      return this.parkingLot;
    }
    this.parkingLot.splice(index, 1);
    return this.parkingLot;
  }
}

module.exports = Airport;
