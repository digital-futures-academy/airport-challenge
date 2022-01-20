class Airport {
  constructor(capacity = 5) {
    this.onGround = [];
    this.capacity = capacity;
  }
  land(plane) {
    this.onGround.push(plane);
  }

}

module.exports = Airport;
