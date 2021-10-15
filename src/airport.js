class Airport {
  // here's a starting point for you
  parkingLot = [];
  capacity;
  randomNum;
  weather;

  constructor(newCapacity = 5) {
    this.capacity = newCapacity;
    this.randomNum = Math.round(Math.random());
    this.weather = ["sunny", "stormy"][this.randomNum];
  }

  landPlane(plane) {
    if (this.parkingLot.includes(plane)) {
      return "Not possible: Plane is at airport";
    }
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
    if (this.weather === "stormy") {
      return this.parkingLot;
    }
    this.parkingLot.splice(index, 1);
    return this.parkingLot;
  }
}

module.exports = Airport;
