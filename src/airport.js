class Airport {

  airportList;
  airportCapacity;
  indexOfPlane;
  departedMessage;
  landedMessage;

  constructor(airportCapacity = 5) {
    this.airportList = [];
    this.airportCapacity = airportCapacity;
    this.indexOfPlane = null;
    this.departedMessage = ``;
    this.landedMessage = ``;
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
    if (this.isCapacityFull() !== false && this.airportList.includes(plane) === false) {
      this.airportList.push(plane);
      this.landedMessage = `${plane} has successfully landed at the airport.`
    } else {
      this.landedMessage = `${plane} has not landed at the airport as it is already there.`
    }
  }

  takeoff(plane) {
    if (this.airportList.includes(plane)) {
      this.indexOfPlane = this.airportList.indexOf(plane);
      this.airportList.splice(this.indexOfPlane, 1);
      this.departedMessage = `${plane} has successfully departed from the airport.`
    } else {
      this.departedMessage = `This plane "${plane}" is not at this airport`;
    }
  }
};

module.exports = Airport;