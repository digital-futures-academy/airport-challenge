class Plane {

    // decided setting inFlight at creation was quickest way to set property (does mean going through all tests again)

    constructor(planeID, inFlight) {
        this.planeID = planeID;
        this.inFlight = inFlight;
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