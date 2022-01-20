const {Airport} = require('./airport')

class AirTrafficController {

    //orders plane to land
    landPlaneOrder(airplaneID, airportID){
        //check if airport exists and airplane exists after
        Airport.landPlane(airplaneID, airportID);
    }
}

module.exports={AirTrafficController};