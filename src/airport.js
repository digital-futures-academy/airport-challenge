const Airplanes = require('./airplane.js');

class Airport {

  airplaneList = []
  airportCapacity

  landPlane = (airplane) => {
    if (airplane instanceof Airplanes && (airplane.ID > 0 || typeof (airplane.ID) === 'string')) this.airplaneList.push(airplane);
  }

  maxCapacity(capacity = 10) {
    this.airportCapacity = capacity;
  }

  checkCapacity = () => {
    if (this.airplaneList.length === this.airportCapacity) return 'Airport capacity at max'
  }

  planeTakeOff = (airplane) => {
    if (airplane instanceof Airplanes && this.airplaneList.findIndex(airplaneList => airplaneList.ID === airplane.ID) > -1) {
      this.airplaneList.splice(this.airplaneList.findIndex(airplaneList => airplaneList.ID === airplane.ID), 1)
    }
  }

  findPlane = (airplane) => {
    if (airplane instanceof Airplanes && this.airplaneList.findIndex(airplaneList => airplaneList.ID === airplane.ID) > -1) {
      return 'Plane is in the airport'
    }

  }

}

module.exports = Airport;

