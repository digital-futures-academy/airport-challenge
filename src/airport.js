const Plane = require("./Plane");

class Airport {

  planesAtAirport = [];

  constructor(airportCapacity = 10) {

    this.airportCapacity = airportCapacity;
  }

  landPlane = plane => {
    if (plane instanceof Plane && this.planesAtAirport.length < this.airportCapacity) {
      this.planesAtAirport.push(plane)
    }
  };

  increaseAirportCapacity = addCapacity => {
    if (Number.isSafeInteger(addCapacity) && addCapacity > 0) {
      this.airportCapacity += addCapacity;
    }
  }

}

module.exports = Airport;
