class Airport {
    constructor() {
        this.planes = [];
    }

    addPlaneToAirport(planeToAdd) {
        if (planeToAdd?.id) {
            this.planes.push(planeToAdd);
        }
    }
}

module.exports = Airport;
