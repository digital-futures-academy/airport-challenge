class Airport {

    #landedPlanes;
    #maxAirportCapacity;
    #weather;

    constructor(weather = 'clear') {
        this.#landedPlanes = [];
        this.#maxAirportCapacity = 5;
        this.#weather = weather;
    }

    getLandedPlanes() {
        return this.#landedPlanes;
    }

    getWeather() {
        return this.#weather.getWeather();
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
        if (planeToAdd?.getId() && this.canLandPlane() && !this.checkPlaneAtAirport(planeToAdd) && !this.isWeatherStormy()) {
            this.#landedPlanes.push(planeToAdd);
            planeToAdd.setLanded(true);
        }
    }

    increaseAirportCapacity(valueToIncrease) {
        if (!isNaN(valueToIncrease)) {
            this.#maxAirportCapacity += parseInt(valueToIncrease);
        }
    }

    canLandPlane() {
        return this.#landedPlanes.length < this.#maxAirportCapacity;
    }

    takeoffPlane(planeToRemove) {
        if (planeToRemove?.getId() && this.checkPlaneAtAirport(planeToRemove.getId()) && !this.isWeatherStormy()) {
            const index = this.#landedPlanes.indexOf(planeToRemove);
            const planeTakenOff = this.#landedPlanes.splice(index, 1);
            planeToRemove.setLanded(false);
            return `${planeTakenOff[0].id} has taken off from the airport.`;
        }
    }

    checkPlaneAtAirport(planeToCheck) {
        return this.#landedPlanes.some(plane => plane.getId() === planeToCheck);
    }

    isWeatherStormy() {
        return this.getWeather() === 'stormy';
    }
}

module.exports = Airport;
