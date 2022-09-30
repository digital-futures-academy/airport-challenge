class Airport {

  airportList;

  constructor() {
    this.airportList = [];
  }

  land(plane) {
    this.airportList.push(plane);
  }

}

module.exports = Airport;
