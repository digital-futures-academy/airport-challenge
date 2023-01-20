// const Airport = require(`./Airport`);

class Plane { 
    flightNumber;
    takenOff;
    takeOff;
    notInThisAirport;
    inThisAirport;
    land;
    noTakeOffRequired;
    noLandingRequired;

    constructor(flightNumber, takenOff = true) {
        this.flightNumber = flightNumber;
        this.takenOff = takenOff; 
    }

    notInAirport() {
        if (this.takenOff == true) {
            this.notInThisAirport = true;
        }
    }
     
    noTakeOff() {
        this.flightNumber = `PG123`;
        const planeInAirport = airport.airportPlanes.includes(this.flightNumber);
        
        if (planeInAirport == false) {
            this.noTakeOffRequired = true;
        }              
    }

    noLanding() {
        airport.airportPlanes = [`PG123`];
        this.flightNumber = `PG123`;
        const planeInAirport = airport.airportPlanes.includes(this.flightNumber);
        
        if (planeInAirport == true) {
            this.noLandingRequired = true;
        } else {
            airport.airportPlanes.push(plane);
        }   
    }

}


module.exports = Plane;