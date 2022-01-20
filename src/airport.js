class Airport {
  constructor(capacity = 5) {
    this.onGround = [];
    this.capacity = capacity;
  }
  land(plane) {
    this.onGround.push(plane);
  }
  isFull() {
    return (this.onGround.length === this.capacity) ? true : false;
  }

}

module.exports = Airport;
