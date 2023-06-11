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

    increaseAirportCapacity(valueToIncrease) {
        if (!isNaN(valueToIncrease)) {
            this.maxAirportCapacity += parseInt(valueToIncrease);
        }
    }
}

module.exports = Airport;
