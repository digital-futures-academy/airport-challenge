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

    setInFlight(status) {
        this.inFlight = status;
    }

}

module.exports = {
    Plane,
}