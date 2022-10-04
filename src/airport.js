class Airport {

  airportList;
  airportCapacity;
  indexOfPlane


  constructor(airportCapacity = 5) {
    this.airportList = [];
    this.airportCapacity = airportCapacity;
    this.indexOfPlane = null;
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
    this.indexOfPlane = this.airportList.indexOf(plane);
    this.airportList.splice(this.indexOfPlane, 1);
    return this.airportList;
  }
};



module.exports = Airport;
