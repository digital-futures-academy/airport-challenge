class Airport {
    constructor() {
        this.planes = [];
        this.maxAirportCapacity = 5;
    }

    addPlaneToAirport(planeToAdd) {
        if (planeToAdd?.id && this.canLandPlane() && !this.checkPlaneAtAirport(planeToAdd)) {
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
        if (planeToRemove && this.checkPlaneAtAirport(planeToRemove)) {
            const index = this.planes.map(plane => plane.id).indexOf(planeToRemove);
            const planeTakenOff = this.planes.splice(index, 1);
            return `${planeTakenOff[0].id} has taken off from the airport.`;
        }
    }

    checkPlaneAtAirport(planeToCheck) { return this.planes.some(plane => plane.id === planeToCheck); }
}

module.exports = Airport;
