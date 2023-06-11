class Airport {
    constructor() {
        this.planes = [];
        this.maxAirportCapacity = 5;
    }

    addPlaneToAirport(planeToAdd) {
        if (planeToAdd?.id && this.canLandPlane()) {
            this.planes.push(planeToAdd);
        }
    }

    increaseAirportCapacity(valueToIncrease) {
        if (!isNaN(valueToIncrease)) {
            this.maxAirportCapacity += parseInt(valueToIncrease);
        }
    }

    canLandPlane() {
        return this.planes.length < this.maxAirportCapacity;
    }

    removePlaneFromAirport(planeToRemove) {
        if (planeToRemove) {
            const index = this.planes.map(plane => plane.id).indexOf(planeToRemove);
            const planeTakenOff = this.planes.splice(index, 1);
            return `${planeTakenOff[0].id} has taken off from the airport.`;
        }
    }
}

module.exports = Airport;
