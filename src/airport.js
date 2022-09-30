class Airport {

  airportList;
  airportCapacity;

  constructor() {
    this.airportList = [];
    this.airportCapacity = 10;
  };

  land(plane) {
    this.airportList.push(plane);
  };

  capacity() {

  };

}

module.exports = Airport;
