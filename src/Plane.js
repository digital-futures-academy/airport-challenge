class Plane { 
    flightNumber;
    takeOff;
    notInThisAirport;

    constructor(flightNumber, takeOff = true) {
        this.flightNumber = flightNumber;
        this.takeOff = takeOff;
    }

    notInAirport() {
        if (this.takeOff == true) {
            this.notInThisAirport = true;
        
        }
    }

}


module.exports = Plane;