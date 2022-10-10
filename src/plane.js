class Plane {
    planeID;
    airport;

    constructor(planeID, airport) {
        this.planeID = planeID
        this.airport = airport
    }

    clearToLand() {
        this.airport.landplane(this.planeID);

    }
    clearToTakeOff() {
        this.airport.planeTakesOff(this.planeID);
    }




}

module.exports = Plane;