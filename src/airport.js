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

    checkPlaneCanLand() {
        return !this.isAirportFull() && !this.isWeatherStormy();
    }
    /* Not overly happy with how I implemented landPlane to include all the conditions before adding a plane to the array
    Changed it from a single if statement:
    if(planeToAdd?.getId() && !this.isAirportFull() && !this.isWeatherStormy() && !this.checkPLaneAtAirport(planeToAdd))
    To a nested if statement which uses checkPlaneCanLand() to handle both capacity and weather conditions.
    Feels it's still doing the same as before just not on one line.
     */

    landPlane(planeToAdd) {
        if (planeToAdd?.getId() && !this.checkPlaneAtAirport(planeToAdd.getId())) {
            if (this.checkPlaneCanLand()) {
                this.#landedPlanes = [...this.#landedPlanes, planeToAdd];
                planeToAdd.setLanded(true);
            }
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

    /* Similar issue to landPlane, takeoffPlane has 3 chained conditions in a single if statement.
    Could refactor like I did with with landPlane but feel I still feel there will be a smell about it.
    */

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
