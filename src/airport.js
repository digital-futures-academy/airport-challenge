class Airport {

  airportList;
  airportCapacity;

  constructor(airportCapacity = 5) {
    this.airportList = [];
    this.airportCapacity = airportCapacity;
  };

  land(plane) {
    this.airportList.push(plane);
  }

  capacity(size) {
    if (size === undefined) {
      return this.airportCapacity;
    } else {
      this.airportCapacity = size;
    };
  }

  isCapacityFull() {
    if (this.airportList.length === this.airportCapacity) {
      return true
    }
  }
};



module.exports = Airport;
