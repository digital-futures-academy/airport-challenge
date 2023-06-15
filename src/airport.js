class Airport {

    #landedPlanes;
    #maxAirportCapacity;
    #weather;

    constructor(weather) {
        this.#landedPlanes = [];
        this.#maxAirportCapacity = 5;
        this.#weather = weather;
    }

    getLandedPlanes() {
        return this.#landedPlanes;
    }

    getMaxAirportCapacity() {
        return this.#maxAirportCapacity;
    }

    setWeather(newWeather) {
        this.#weather.setWeather(newWeather);
    }

    setLandedPlanes(array) {
        this.#landedPlanes = array;
    }

    landPlane(planeToAdd) {
        if (planeToAdd?.getId() && !this.isAirportFull() && !this.checkPlaneAtAirport(planeToAdd.getId()) && !this.isWeatherStormy()) {
            this.#landedPlanes = [...this.#landedPlanes, planeToAdd];
            planeToAdd.setLanded(true);
        }
    }

    increaseAirportCapacity(valueToIncrease) {
        if (!isNaN(valueToIncrease)) {
            this.#maxAirportCapacity += parseInt(valueToIncrease);
        }
    }

    isAirportFull() {
        return this.#landedPlanes.length >= this.#maxAirportCapacity;
    }

    takeoffPlane(planeToRemove) {
        if (planeToRemove?.getId() && this.checkPlaneAtAirport(planeToRemove.getId()) && !this.isWeatherStormy()) {
            const index = this.#landedPlanes.findIndex(plane => plane.getId() === planeToRemove.getId())
            const planeTakenOff = this.#landedPlanes.splice(index, 1);
            planeToRemove.setLanded(false);
            return `${planeTakenOff[0].getId()} has taken off from the airport.`;
        }
    }

    checkPlaneAtAirport(planeToCheck) {
        return this.#landedPlanes.some(plane => plane.getId() === planeToCheck);
    }

    isWeatherStormy() {
        return this.#weather.isWeatherStormy()
    }
}

module.exports = Airport;
