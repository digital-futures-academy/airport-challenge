class Airport {

  airportList;
  airportCapacity;
  indexOfPlane;
  departedMessage;


  constructor(airportCapacity = 5) {
    this.airportList = [];
    this.airportCapacity = airportCapacity;
    this.indexOfPlane = null;
    this.departedMessage = ``;
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
    if (this.airportList.includes(plane) === true) {
      this.indexOfPlane = this.airportList.indexOf(plane);
      this.airportList.splice(this.indexOfPlane, 1);
      this.departedMessage = `${plane} has successfully departed from the airport.`
    }
  }
};



module.exports = Airport;
