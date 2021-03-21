class Airport {
  constructor() {
      this.landingArea = [];
      this.capacity = 5;
  }
  land(plane){
      this.landingArea.push(plane);
      return this.landingArea;
  }
}

module.exports = Airport;
