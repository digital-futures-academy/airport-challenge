class Airport {
  constructor() {
      this.landingArea = [];
  }
  land(plane){
      this.landingArea.push(plane);
      return this.landingArea;
  }
}

module.exports = Airport;
