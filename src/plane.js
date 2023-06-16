class Plane {

    constructor(planeID) {
        this.planeID = planeID;
        this.inFlight = false;
    }

    getPlaneID() {
        return this.planeID;
    }

    getInFlight() {
        return this.inFlight;
    }



}

module.exports = {
    Plane,
}