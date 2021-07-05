//Air Traffic Controller Class
class AirTrafficController{

    queryTakeOff(plane,airport,weather = 'fine'){ 
        if (weather === 'stormy'){
            return `As the weather is stormy, the plane, ${plane.name}, is not permitted to take off`
        }    
        else if (airport.planes.includes(plane)) {

            // Move the first part of this code as a method in the airport class

            // Move the second part to a method in the plane class which modifies its own internal state. 
            airport.planes[airport.planes.indexOf(plane)].flyingStatus = 'take off';
    
            return 'Ready for take off!';
        }
        else if (plane.flyingStatus === 'flying') {
            return `The plane, ${plane.name}, you are trying to take off is already flying`;
        }
        else {
            return `The plane ${plane.name} is not located at ${airport.name}, take off request invalid.`;
        }
    }

    queryLanding(plane, airport, weather = 'fine') {
        if (weather === 'stormy') {
            return `As the weather is stormy, the plane, ${plane.name}, is not permitted to land`
        }
        // Write a method in airport.js that checks if a plane exists in its internal planes array property.
        else if (airport.planes.includes(plane)) {
            return `The plane, ${plane.name}, you are trying to land has has already landed`;
        } else {
            // The flying status of the plane should be set internally by the plane. The internal method should then be called by the atc class. 
            plane.flyingStatus = 'landing';
            return 'Ready for landing!';
        }

    }
}   

module.exports = AirTrafficController;
