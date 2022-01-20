class Airport {
  constructor() {
    this.onGround = [];
  }
  land(plane) {
    this.onGround.push(plane);
  }

}

module.exports = Airport;
