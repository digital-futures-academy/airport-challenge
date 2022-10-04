class Airport {

  airportList;
  airportCapacity;

  constructor(airportCapacity = 5) {
    this.airportList = [];
    this.airportCapacity = airportCapacity;
  };



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

  land(plane) {
    if (this.isCapacityFull() !== true) {
      this.airportList.push(plane);
    }
  }

  takeoff(plane) {

  }
};



module.exports = Airport;
