class Airport {
    constructor(weather = 'clear') {
        this.planes = [];
        this.maxAirportCapacity = 5;
        this.weather = weather;
    }

    setWeather(weather) {
        this.weather = weather;
    }

    landPlane(planeToAdd) {
        if (planeToAdd?.id && this.canLandPlane() && !this.checkPlaneAtAirport(planeToAdd) && !this.isWeatherStormy()) {
            this.planes.push(planeToAdd);
            planeToAdd.setLanded(true);
        }
    }

    increaseAirportCapacity(valueToIncrease) {
        if (!isNaN(valueToIncrease)) {
            this.maxAirportCapacity += parseInt(valueToIncrease);
        }
    }

    canLandPlane() { return this.planes.length < this.maxAirportCapacity; }

    takeoffPlane(planeToRemove) {
        if (planeToRemove.id && this.checkPlaneAtAirport(planeToRemove.id) && !this.isWeatherStormy()) {
            const index = this.planes.map(plane => plane.id).indexOf(planeToRemove.id);
            const planeTakenOff = this.planes.splice(index, 1);
            planeToRemove.setLanded(false);
            return `${planeTakenOff[0].id} has taken off from the airport.`;
        }
    }

    checkPlaneAtAirport(planeToCheck) { return this.planes.some(plane => plane.id === planeToCheck); }

    isWeatherStormy() { return this.weather === 'stormy'; }
}

module.exports = Airport;
