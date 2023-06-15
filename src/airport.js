const airport = {
    airportCapacity: 10,
    landedPlanes: [],
    weather: 0,

    indexOfPlane: function (plane) {
        return this.landedPlanes.indexOf(plane);
    },

    landPlane: function (planeID) {
        if (!this.isFull() && !this.isInAirport(planeID) && this.weather === 0) {
            return this.landedPlanes.push(planeID);
        }
    },

    isFull: function () {
        return this.landedPlanes.length >= this.airportCapacity;
    },

    isInAirport: function (planeID) {
        return this.landedPlanes.includes(planeID)
    },

    overrideCapacity: function (newCapacity) {
        if (Number.isInteger(newCapacity)) {
            return this.airportCapacity = newCapacity;
        }
    },

    planeTakeOff: function (planeID) {
        if (this.isInAirport(planeID) && this.weather === 0) {
            return this.landedPlanes.splice(this.indexOfPlane(planeID), 1);
        }
    },

    isStormy: function () {
        if (this.weather % 2 == 0) {
            return false;
        } return this.weather = true;
    },

    isAtAirport: function (planeID) {
        if (this.indexOfPlane(planeID) != -1) {
            return true;
        }
    },
}

module.exports = airport;