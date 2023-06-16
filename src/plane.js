class Plane {

    // decided setting inFlight at creation was quickest way to set property (does mean going through all tests again)

    constructor(planeID, inFlight) {
        this.planeID = planeID;
        this.inFlight = inFlight;
        this.location = 'In Flight'
    }

    getPlaneID() {
        return this.planeID;
    }

    getInFlight() {
        return this.inFlight;
    }

    setInFlight(status) {
        this.inFlight = status;
        (status) ? this.setLocation('In Flight') : this.setLocation('At Airport');
    }

    static checkInputIsAPlaneObject(input) {
        return input instanceof Plane
    }

    getLocation() {
        return this.location;
    }

    setLocation(location) {
        this.location = location;
    }

}


module.exports = {
    Plane,
}