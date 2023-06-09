class Airport {
    constructor() {
        this.planes = [];
        this.maxAirportCapacity = 5;
    }

    addPlaneToAirport(planeToAdd) {
        if (planeToAdd?.id) {
            this.planes.push(planeToAdd);
        }
    }

    increaseAirportCapacity(valueToIncrease) { this.maxAirportCapacity += valueToIncrease; }
}

module.exports = Airport;
