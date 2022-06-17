const Airport = require("./airport");

    
class plane{
    id = [];
  
   

    takeOff(plane) {
        if (plane.flightStatus === false) {
            this.id.push(plane);
            console.log(`Plane ✈️  ${plane.id} to ${plane.destination} from ${plane.departure} is in the air.`);
            plane.departure = true;
            Airport.planesAtAirport = 0;
        }
        else {
            
        }
    }

    isInAir(plane) {
        this.id.push(plane); 
        console.log(`Plane ✈️  ${plane.id} is in the air.`);
    
    }
}
module.exports = plane;