class Plane {
    constructor(planeID) {
        this.planeID = planeID;
    }
    //check wether a plane is at an specific airport
    isAtAirport = (airport) => {
        if (airport.getLandedPlanes().includes(this.planeID)) {
            return true;
        }
    }
}

module.exports = Plane;