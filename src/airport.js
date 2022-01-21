// const Airplane = require('./airplane');

class Airport {
  //here's a starting point for you
  constructor(airportName){
    this.airportName = airportName;
    this.parkedPlanes = [];
  }

  getAirportName(){
    return this.airportName;
  }

  //lands requested plane at airport
  landPlane(airplane){
    this.parkedPlanes.push(airplane.getAirplaneName())
    return airplane.land()
    // console.log(
    // `The airplane: ${airplane.getAirplaneName()} \n
    // has landed is: ${status} \n
    // at ${this.getAirportName()}`);
  }

}

module.exports = Airport
