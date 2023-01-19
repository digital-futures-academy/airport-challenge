class Plane { 
    flightNumber;
    takenOff;
    takeOff;
    notInThisAirport;
    land;

    constructor(flightNumber, takenOff = true) {
        this.flightNumber = flightNumber;
        this.takenOff = takenOff;
    }

    notInAirport() {
        if (this.takenOff == true) {
            this.notInThisAirport = true;
        }

        if (this.notInThisAirport == true) {
            this.takeOff = false;
            this.land = true;
        }
    }

}


module.exports = Plane;