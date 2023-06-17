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

    getAtAirport() {
        return this.atAirport;
    }

    setAtAirport(atAirport) {
        this.atAirport = atAirport;
    }

    static checkInputIsAPlaneObject(input) {
        return input instanceof Plane;
    }

    static checkPlaneIDInput(input) {
        return (input?.planeID && typeof input.planeID === 'string');
    }

    static checkPlaneFlightInput(input) {
        return (input?.inFlight && typeof input.inFlight === 'boolean');

    }


}


module.exports = {
    Plane,
}