class Airport {

  airportList;
  airportCapacity;
  defaultCapacity;

  constructor(size) {
    this.airportList = [];
    this.airportCapacity = undefined;
    this.defaultCapacity = 10
  };

  land(plane) {
    this.airportList.push(plane);
  };

  capacity(size) {
  };

}

module.exports = Airport;
