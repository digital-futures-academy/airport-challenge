const Airport = require("./airport");

    
class plane{
    id = [];

    createPlane(plane) {
        this.id.push(plane);
    }
   
    takeOff(plane) {
        if (plane.flightStatus === false) {
            this.id.push(plane);
            console.log(`Plane ✈️  ${plane.id} to ${plane.destination} from ${plane.departure} is in the air.`);
            plane.departure = true;
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