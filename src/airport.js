class Airport {

  airportList;
  airportCapacity;
  departedMessage;
  landedMessage;
  actualWeather;

  constructor(airportCapacity = 5) {
    this.airportList = [];
    this.airportCapacity = airportCapacity;
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
    if (this.isCapacityFull() !== false && this.airportList.includes(plane) === false && this.weather !== `stormy`) {
      this.airportList.push(plane);
      this.landedMessage = `${plane} has successfully landed at the airport.`
    } else {
      this.landedMessage = `${plane} has not landed.`
    }
  }

  takeoff(plane) {
    if (this.airportList.includes(plane) && this.weather !== `stormy`) {
      this.airportList.splice(this.airportList.indexOf(plane), 1);
      this.departedMessage = `${plane} has successfully departed from the airport.`
    } else {
      this.departedMessage = `${plane} has not departed`;
    }
  }
};

module.exports = Airport;