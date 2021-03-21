class Airport {
  constructor() {
      this.landingArea = [];
      this.capacity = 5;
  }
  land(plane){
    if(this.landingArea.length < this.capacity) {
      this.landingArea.push(plane);
      return this.landingArea;
    }
    else {
      return "Sorry this airport is full you can't land here";
    }
  }

  takeOff(plane){
    this.landingArea.splice(this.landingArea.indexOf(plane), 1);
    return this.landingArea;
  }
}

module.exports = Airport;
