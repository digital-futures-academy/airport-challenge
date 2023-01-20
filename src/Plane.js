const Airport = require(`./Airport`);

class Plane { 
    flightNumber;
    takenOff;
    takeOff;
    notInThisAirport;
    inThisAirport;
    land;
    noTakeOffRequired;

    constructor(flightNumber, takenOff = true) {
        this.flightNumber = flightNumber;
        this.takenOff = takenOff;
       
    }

    notInAirport() {
        if (this.takenOff == true) {
            this.notInThisAirport = true;
        }

    }
    // inAirport(){
    //     if (this.inThisAirport == false) {
    //         this.takeOff = false;
    //         this.land = true;
    //     } 

    //     if (this.inThisAirport == true) {
    //         this.takeOff = true;
    //         this.land = false;
    //     } 

    // }
    
    noTakeOff() {
        this.flightNumber = `PG123`;
        const planeInAirport = airport.airportPlanes.includes(this.flightNumber);
        
        if (planeInAirport == false) {
            this.noTakeOffRequired = true;
        }            
        
    }
}


module.exports = Plane;