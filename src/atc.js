//Air Traffic Controller Class
class AirTrafficController{

    find(plane,airport){
        return airport.find(plane) != - 1;
    }

    checkWeather(weather){
        if (weather === 'stormy') {
            return `As the weather is stormy, that operation is not permitted.`}
    }

    queryTakeOff(plane, airport, weather = 'fine'){ 
        this.checkWeather(weather);
        if (this.find(plane, airport)) {
            airport.planes[airport.find(plane)].takeOff()
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
        this.checkWeather(weather);
        if (this.find(plane,airport)) {
            return `The plane, ${plane.name}, you are trying to land has has already landed`;
        } else { 
            plane.landing()
            return 'Ready for landing!';
        }

    }
}   

module.exports = AirTrafficController;
