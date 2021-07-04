//Air Traffic Controller Class
class AirTrafficController{

    queryTakeOff(plane,airport){    
        if (airport.planes.includes(plane)) {
            airport.planes[airport.planes.indexOf(plane)].flyingStatus = 'take off'
            console.log(airport.planes)
            return "Ready for take off!"
        }
        else if (plane.flyingStatus === 'flying') {
            return `The plane, ${plane.name}, you are trying to take off is already flying`
        }
        else {
            return `The plane ${plane.name} is not located at ${airport.name}, take off request invalid.`
        }
    }

    queryLanded(plane, airport) {
        
    }
}   

module.exports = AirTrafficController
