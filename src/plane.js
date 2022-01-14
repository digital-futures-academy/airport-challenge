class Plane {
    // here's a starting point for you
    constructor() {

    }

    land(landingAirport) {
        landingAirport.landedPlanes.push(this);
    }
}

module.exports = Plane;
