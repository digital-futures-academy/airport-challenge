const Plane = require("./Plane");

class Airport {

  planesAtAirport = [];

  constructor(airportCapacity = 10) {

    this.airportCapacity = airportCapacity;
  }

  landPlane = plane => {
    if (plane instanceof Plane && this.planesAtAirport.length < this.airportCapacity && this.checkPlanesAtAirport(plane) === false) {
      this.planesAtAirport.push(plane)
    }
  };

  increaseAirportCapacity = addCapacity => {
    if (Number.isSafeInteger(addCapacity) && addCapacity > 0) {
      this.airportCapacity += addCapacity;
    }
  };

  takeOffPlane = plane => {
    const indexOfPlanesAtAirport = this.planesAtAirport.findIndex(planeTakingOff => planeTakingOff.planeId === plane.planeId);

    if (indexOfPlanesAtAirport > -1) {
      this.planesAtAirport.splice(indexOfPlanesAtAirport, 1);
    }
  };

  checkPlanesAtAirport = plane => {
    for (let i = 0; i < this.planesAtAirport.length; i++) {
      if (this.planesAtAirport[i] === plane) {
        return true;
      }
      else {
        return false;
      }
    }
  };

}

module.exports = Airport;
