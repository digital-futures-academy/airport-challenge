class Plane {
    constructor(planeID) {
        this.planeID = planeID;
    }
    //check whether a plane is at an specific airport
    isAtAirport = (airport) => airport.getLandedPlanes().includes(this.planeID) ? true : false
}

module.exports = Plane;
