class Plane {

    constructor(planeID, inFlight) {
        this.planeID = planeID;
        this.inFlight = inFlight;
        this.atAirport = false
    }

    getPlaneID() {
        return this.planeID;
    }

    getInFlight() {
        return this.inFlight;
    }

    setInFlight(status) {
        this.inFlight = status;
        (status) ? this.setAtAirport(false) : this.setAtAirport(true);
    }

    static checkInputIsAPlaneObject(input) {
        return input instanceof Plane
    }

    getAtAirport() {
        return this.atAirport;
    }

    setAtAirport(atAirport) {
        this.atAirport = atAirport;
    }


    static checkPlaneIDInput(input) {
        if (input?.planeID && typeof input.planeID === 'string') {
            return true
        }
    }

    static checkPlaneFlightInput(input) {
        if (input?.inFlight && typeof input.inFlight === 'boolean') {
            return true
        }

    }


}


module.exports = {
    Plane,
}