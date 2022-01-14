class Airport {
  constructor() {
    this.grounded = [];
  }
  landing (plane) {            
    this.grounded.push(plane);
  }
}

module.exports = Airport;
