const {Airplane} = require('./airplane');

class Airport {
  //here's a starting point for you
  constructor(airportID){
    this.airportID = airportID;
  }

  //lands requested plane at airport
  landPlane(airplaneID, airportID){
    let output = Airplane.setInAirStatus(false);
    console.log(`The airplane: ${airplaneID} \n
    has landed is: ${output} \n
    at ${airportID}`);
  }
}

module.exports = {Airport};
