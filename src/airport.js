class Airport {

  airportList;
  airportCapacity;
  defaultCapacity;

  constructor() {
    this.airportList = [];
    this.airportCapacity = 0;
    this.defaultCapacity = 10;
  };

  land(plane) {
    this.airportList.push(plane);
  };

  capacity(size) {
    if (size === undefined) {
      this.airportCapacity = this.defaultCapacity;
    } else {
      this.airportCapacity = size;
    }
  };

}

module.exports = Airport;
