//Air Traffic Controller Class
class AirTrafficController{

    queryTakeOff(plane,airport){    
        console.log(airport);
        
        if (airport.planes.includes(plane)) {
            airport.plane.flyingStatus = 'take off'
            return "Ready for take off!"
        }
        else if (plane.flyingStatus === 'flying') {
            return `The plane, ${plane.name}, you are trying to take off is already flying`
        }
        else {
            return `The plane ${plane.name} is not located at ${airport.name}, take off request invalid.`
        }
    }
}   

module.exports = AirTrafficController
